import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {collection, addDoc,onSnapshot} from "firebase/firestore";
import db from "./firebase";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
    < App /> 
    </BrowserRouter>
 </React.StrictMode>

);

function firebaseC(){
   const [newNoteInput,setNewNoteInput]=useState({});
   const[Note,setNote]=useState({});

 useEffect(()=>{
    onSnapshot(collection(db,"board"),(snapshot)=>{
       snapshot.docChanges().forEach((docChange)=>{
          if(docChanges.type==="added"){
             setNote((prevNote)=>[...prevNote,docChange.doc.data()]);
          }else if(docChange.type==="removed"){
            setNote(
               Note.filter((board)=>board.id!==docChange.doc.id))
          }
       })
   });
},[]);
 const handleSubmit =async(event)=>{
    event.preventDefault();
    setNote((prev)=>{
       return [newNote,...prev];
    });
   const docRef = await addDoc(collection(db, "board"), {
      ...newNote,
  
   });
   setNewNoteInput({
      Active:"",
      Date:"",
      Done:"",
      DueDate:"",
      Text:"",
      Title:"",
      To:""

   });
}
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
