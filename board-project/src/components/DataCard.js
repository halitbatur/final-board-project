import BoardCard from "./BoardCard";

import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
} from "firebase/firestore";

function DataToCard() {
    const [newTitle, setNewTitle] = useState("")
    const [newDate, setNewDate] = useState("")
    const [newText, setNewText] = useState("")
    const [newSupervisor, setNewSupervisor] = useState("")

  const [boards, setBoards] =useState([])
  const boardsCollectionRef = collection(db, "boards")

  const createBoard = async ()=>{
    await addDoc(boardsCollectionRef, {title: newTitle, date: newDate, text: newText, supervisor: newSupervisor})
  }


  useEffect(()=> {

    const getBoards = async () => {
        const data = await getDocs(boardsCollectionRef)
        setBoards(data.docs.map((board)=> ({...board.data(), id: board.id})))
        console.log(data.docs)

    }
    getBoards()
  }, [])

  return <div>
    <div>
    <input className="m-2 p-2 bg-gray-600" placeholder="title..." onChange={(event)=> {setNewTitle(event.target.value)}}/>
    <input className="m-2 p-2 bg-gray-600" placeholder="text..." onChange={(event)=> {setNewText(event.target.value)}}/>
    <input className="m-2 p-2 bg-gray-600" placeholder="date..." onChange={(event)=> {setNewDate(event.target.value)}}/>
    <input className="m-2 p-2 bg-gray-600" placeholder="Supervisor..." onChange={(event)=> {setNewSupervisor(event.target.value)}}/>
  </div>
    <button className="bg-cyan-200 p-2" onClick={createBoard}>Add New</button>
    {boards.map((board)=> {
        return <div className="mt-2">
            <BoardCard title={board.title} text={board.text} supervisor={board.supervisor} date={board.date}/>
            </div>
    })}
  </div>
}

export default DataToCard;
