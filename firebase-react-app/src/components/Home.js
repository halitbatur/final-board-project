import React, { useEffect, useState } from "react";
import { collection, addDoc, onSnapShot } from "firebase/firestore";
import db from "../firebase";

function Project() {
    const [newProject, setNewProject] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefualt();
        await addDoc(collection(db, "users"), {
            ...newProject
          });
          setNewProject({
            title: "",
            ProjectList: " ",
            AddCard: " "
          })
    }

}

export default Project;