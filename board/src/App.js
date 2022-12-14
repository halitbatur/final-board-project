import React, { useEffect, useState } from "react";

import Board from "./Components/Board/Board";

import "./App.css";
import Editable from "./Components/Editabled/Editable";
import { collection, addDoc, getDoc, onSnapshot } from "firebase/firestore";
import { doc, updateDoc, deleteField, serverTimestamp } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import db from "../src/firebase";
import { v4 } from 'uuid';

function App() {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("prac-kanban")) || []
  );

  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "",
  });

  const queryIds = query(
    collection(db, "boards")
  );

  const [boards1, setBoards1] = useState([]);
  useEffect(() => {

    onSnapshot(collection(db, "boards"), (snapshot) => {
      snapshot.docChanges().forEach((docChange) => {
        if (docChange.type === "added") {
          setBoards1((prevBoardsList) => [...prevBoardsList, docChange.doc.data()]);
          // console.log(docChange.doc.data());
        }
      });
    });

  }, []);

  const addboardHandler = (name) => {
    // const addboardHandler = async (name) => {
    const tempBoards = [...boards];
    tempBoards.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoards);

    //  let boardID = v4();
    addDoc(collection(db, "boards"), {
      id: v4(),
      title: name
    });

  }

  const removeBoard = (id) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
    //   updateDoc(cityRef, {
    //     capital: deleteField()
    // });
  };

  const addCardHandler = (id, title) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
    });
    setBoards(tempBoards);

    addDoc(collection(db, "tasks"), {
      boardId: id,
      description: "newtask",
      dueDate: serverTimestamp(),
      status: "done",
      cardName: title
    });

    async function getDocuments() {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        // alert(doc.id);
      });
    }
    getDocuments();
  };


  const removeCard = (bid, cid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  const dragEnded = (bid, cid) => {
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
      (item) => item.id === cid
    );
    if (s_cardIndex < 0) return;

    t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    if (t_boardIndex < 0) return;

    t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cid
    );
    if (t_cardIndex < 0) return;

    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    setBoards(tempBoards);

    setTargetCard({
      bid: "",
      cid: "",
    });
  };

  const dragEntered = (bid, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      bid,
      cid,
    });
  };

  const updateCard = (bid, cid, card) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    tempBoards[index].cards[cardIndex] = card;

    setBoards(tempBoards);
  };

  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(boards));
  }, [boards]);

  return (
    <div className="app">
      <div className="app_nav">
        <h1>Kanban Board</h1>
      </div>
      <div className="app_boards_container">
        <div className="app_boards">
          {boards1.map((item) => (
            <Board
              key={item.boardId}
              board={item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.boardId)}
              removeCard={removeCard}
              dragEnded={dragEnded}
              dragEntered={dragEntered}
              updateCard={updateCard}
            />
          ))}
          <div className="app_boards_last">
            <Editable
              displayClass="app_boards_add-board"
              editClass="app_boards_add-board_edit"
              placeholder="Enter Board Name"
              text="Add Board"
              buttonText="Add Board"
              onSubmit={addboardHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
