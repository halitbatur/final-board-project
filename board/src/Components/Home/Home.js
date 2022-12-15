import React, { useEffect, useState } from "react";

import Board from "../../Components/Board/Board";
import Editable from "../../Components/Editabled/Editable";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Layout from "../../Components/Layout/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Home.css";

import { doc, collection, addDoc, onSnapshot, deleteDoc, serverTimestamp } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import db from "../../firebase";
import { v4 } from 'uuid';
function Home(props) {
  // const [boards, setBoards] = useState(
  //   JSON.parse(localStorage.getItem("prac-kanban")) || []
  // );
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);

  // console.log(boards);
  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "",
  });

  const queryIds = query(
    collection(db, "boards")
  );

  useEffect(() => {
    onSnapshot(collection(db, "boards"), (snapshot) => {
      snapshot.docChanges().forEach((docChange) => {
        if (docChange.type === "added") {
          const boardId = docChange.doc.id;
          const boardObj = { ...docChange.doc.data(), "cards": [], boardId };

          onSnapshot(collection(db, "cards"), (snapshot) => {
            snapshot.docChanges().forEach((docChange) => {
              if (docChange.type === "added") {
                const id = docChange.doc.id;
                const cardObj = { ...docChange.doc.data(), id };
                setCards((prevCardsList) => [...prevCardsList, cardObj]);
                // console.log(cardObj.boardId, boardObj.id)
                if (cardObj.boardId == boardObj.id) {
                  // console.log("amal card id ", cardObj.boardId, "boardid", boardObj.id)
                  boardObj['cards'].push({ ...cardObj })
                }

              }
            }
            );

          });




          setBoards((prevBoardsList) => [...prevBoardsList, boardObj]);
        }
      }
      );

    });






  }, []);

  // useEffect(() => {
  // }, []);

  // console.log(boards)

  const addboardHandler = (name) => {
    // const addboardHandler = async (name) => {
    // const tempBoards = [...boards];
    // tempBoards.push({
    //   id: Date.now() + Math.random() * 2,
    //   title: name,
    //   cards: [],
    // });
    // setBoards(tempBoards);

    //  let boardID = v4();
    addDoc(collection(db, "boards"), {
      id: v4(),
      title: name
    });

  }


  const removeBoard = async (id) => {
    await deleteDoc(doc(db, "boards", id));
    const newBoards = boards.filter((board) => board.boardId !== id);
    setBoards(newBoards);

    // const index = boards.findIndex((item) => item.id === id);
    // if (index < 0) return;

    // const tempBoards = [...boards];
    // tempBoards.splice(index, 1);
    // setBoards(tempBoards);
    //   updateDoc(cityRef, {
    //     capital: deleteField()
    // });
  };

  const addCardHandler = (id, title) => {
    // const index = boards.findIndex((item) => item.id === id);
    // if (index < 0) return;

    // const tempBoards = [...boards];
    // tempBoards[index].cards.push({
    //   id: Date.now() + Math.random() * 2,
    //   title,
    //   labels: [],
    //   date: "",
    //   tasks: [],
    // });
    // setBoards(tempBoards);

    addDoc(collection(db, "cards"), {
      boardId: id,
      description: "newtask",
      date: serverTimestamp(),
      status: "done",
      title: title
    });
    setBoards(boards);

  };


  const removeCard = async (bid, cid) => {
    // const index = boards.findIndex((item) => item.id === bid);
    // if (index < 0) return;

    // const tempBoards = [...boards];
    // const cards = tempBoards[index].cards;

    // const cardIndex = cards.findIndex((item) => item.id === cid);
    // if (cardIndex < 0) return;

    // cards.splice(cardIndex, 1);
    // setBoards(tempBoards);
    await deleteDoc(doc(db, "cards", cid));
    // console.log(boards)
    // boards.map((board) => {
    //   console.log(board.cards.filter((card) => card.id !== cid))
    // })
    const newBoards = boards.map((board) => {
      board.cards.forEach((card, index) => {
        if (card.id == cid) {
          board.cards.splice(index, 1)
        }

      });
      return board
    });

    setBoards(newBoards);
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
      <div className="app_boards_container">
        <div className="app_boards">
          {boards.map((item) => (
            <Board
              key={item.id}
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

export default Home;
