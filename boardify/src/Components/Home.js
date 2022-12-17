import React, { useEffect } from "react";
import BoardForm from "./BoardForm";
import Switch from "./Switch";
import ListContainer from "./ListContainer";
import BoardContainer from "./BoardContainer";
import { collection, addDoc, onSnapshot,deleteDoc, doc  } from "firebase/firestore";
import  db  from "../backend/firebase-config.js";

function Home() {
  const [boards, setBoards] = React.useState([]);
  const [newBoard, setNewBoard] = React.useState({
    title: "",
    tasks: [],
  });

  const [value, setValue] = React.useState(false);

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
    <div >
      <BoardForm
        onSubmitt={handleSubmit}
        onChange={handleOnChange}
        newBoard={newBoard}
      />

      <div className="flex ml-10 md:ml-20 mt-5 px-3 py-1 font-bold text-[#262626]">
        <h1 className="mr-2 text-2xl "> Board</h1>
        <Switch isOn={value} onColor="black" handleToggle={() => setValue( () => !value)}/>
        <h1 className="ml-2 text-2xl"> List</h1>
      </div>
    
      { value ? <ListContainer boards={boards}/> : <BoardContainer boards={boards} onDelete={handleDeleteBoard} /> }
    </div>
  );
}

export default Home;

