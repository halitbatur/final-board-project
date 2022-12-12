import React, { useEffect, useState } from "react"
import { collection, addDoc, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import db from "../firebase";
import List from "./List"



function Board() {
    
const [newProjectInput, setNewProjectInput] = useState({});
const [projectList, setProjectList] = useState([]);

useEffect(() => {
    onSnapshot(collection(db, "project"), (snapshot) => {
        snapshot.docChanges().forEach((docChange) => {
            if(docChange.type === "added") {
                setProjectList((preProjectList) => [
                     ...preProjectList,
                    docChange.doc.data()
                ]);
            } else if (docChange.type === "removed") {
                setProjectList(
                    projectList.filter((project) => project.id !== docChange.doc.id)
                )
            }
        })
    })
}, []);


const handleOnChange = (event) => {
    const keyName = event.target.name;
    const value = event.target.value;
    setProjectList((prev) => {

        return { ...prev, [keyName]: value }
    })
}

const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "project"), {
        ...projectList
    })
    setProjectList({
title: "",
tasks: []
    })
}

const handleDeleteProject = async (id) => {
    await deleteDoc(doc(db, "project", id));

    const newProject = newProjectInput.filter((project) => project.projectid !== id);
    setProjectList(newProject)
}
return (
    <div>
        <List
        onSubmit={handleSubmit}
        onChange={handleOnChange}
        projectList={newProject}
        />
    </div>
)
}



 export default Board;