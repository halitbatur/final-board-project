import React, { useEffect } from "react";
import BoardForm from "../Components/BoardForm";
import BoardContainer from "../Components/BoardContainer";
import { collection, addDoc, onSnapshot,deleteDoc, doc  } from "firebase/firestore";
import  db  from "../firebase";

function Home() {
  const [boards, setBoards] = React.useState([]);
  const [newBoard, setNewBoard] = React.useState({
    title: "",
    tasks: [],
  });

  useEffect(() => {

    onSnapshot(collection(db, "boards"), (snapshot) => {
      snapshot.docChanges().forEach((docChange) => {
        if (docChange.type === "added") {
          const boardId = docChange.doc.id ; 
          const boardObj = {...docChange.doc.data() , boardId};

          setBoards((prevBoardsList) => [...prevBoardsList, boardObj]);
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
      tasks: [],
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

    await deleteDoc(doc(db, "boards", id));

    const newBoards = boards.filter((board)=> board.boardId !== id);
    setBoards(newBoards);

  };

  return (
    <div className="font-serif w-full flex flex-col">
      <div className="flex justify-center items-center">
         
      <BoardForm
        onSubmitt={handleSubmit}
        onChange={handleOnChange}
        newBoard={newBoard}
      />
      </div>
      <div className="flex justify-center items-center">
      <BoardContainer boards={boards} onDelete={handleDeleteBoard} />

      </div>
    </div>
  );
}

export default Home;

