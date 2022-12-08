import React  from 'react';
import BoardForm from "./BoardForm";
import ToggleButton from "./ToggleButton";
import {
  useState,
  useEffect
} from "react";
import db from '../backend/firebase-config';
import {
  collection,
  getDocs
} from "firebase/firestore";


function Home() {

  const [boards, setBoards] = useState([]);
  const boardsCollectionRef = collection(db , 'Boards');
 

  useEffect(() => {

    const getBoards = async () => {
      const data = await getDocs(boardsCollectionRef);
      setBoards(data.docs.map((doc)=>({...doc.data() , id:doc.id})));
    }
    
    getBoards();
    
  }, []);



   console.log(boards);
  return ( 
    <div>
      <BoardForm />
      <ToggleButton />
    </div>
  );
}

export default Home;