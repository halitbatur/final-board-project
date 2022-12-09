import React, { useEffect } from "react";
import BoardForm from "./BoardForm";
import ToggleButton from "./ToggleButton";
import BoardContainer from "./BoardContainer";
import { collection, addDoc, onSnapshot,deleteDoc, doc  } from "firebase/firestore";
import  db  from "../backend/firebase-config.js";

function Home() {
  const [boards, setBoards] = React.useState([]);
  const [newBoard, setNewBoard] = React.useState([]);

  useEffect(() => {

    onSnapshot(collection(db, "boards"), (snapshot) => {
      snapshot.docChanges().forEach((docChange) => {
        if (docChange.type === "added") {
          setBoards((prevBoardsList) => [...prevBoardsList, docChange.doc.data()]);
        }
      });
    });

  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addDoc(collection(db, "boards"), {
      ...newBoard,
    });
    setNewBoard({
      title: "",
    });
  };

  const handleOnChange = (event) => {
    const keyName = event.target.name;
    const value = event.target.value;
    setNewBoard((prev) => {
      return { ...prev, [keyName]: value };
    });
  };

  const handleDeleteBoard = async (id) => {
    await deleteDoc(doc(db,"boards",id))
  };

  return (
    <div>
      <BoardForm
        onSubmitt={handleSubmit}
        onChange={handleOnChange}
        newBoard={newBoard}
      />
      <ToggleButton />
      <BoardContainer boards={boards} onDelete={handleDeleteBoard} />
    </div>
  );
}

export default Home;

