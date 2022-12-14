import React from 'react'


function BoardTitle(props){
    if (props.title === '' || props.title === undefined) {
      return null
    }else {
      return  <p className="font-bold bg-red-500 pb-2">{props.title}</p>
    }
  } 

  function BoardText(props){
    if (props.text === '' || props.text === undefined) {
      return null
    }else {
      return  <p className="bg-blue-500">{props.text}</p>
    }
  } 

  function BoardSupervisor(props){
    if (props.supervisor === '' || props.supervisor === undefined) {
      return null
    }else {
      return  <p className="bg-gray-800 font-light">{props.supervisor}</p>
    }
  } 

  function BoardDate(props){
    if (props.date === '' || props.date === undefined) {
      return null
    }else {
      return  <p className="bg-gray-600 font-extralight">{props.date}</p>
    }
  } 


function BoardCard(props) {
  return (
    <div className="bg-cyan-500 w-1/4 rounded-2xl">
        <BoardTitle title = {props.title}/>
        <BoardText text = {props.text}/>
        <div className="flex ">
        <BoardSupervisor supervisor = {props.supervisor}/>
        <BoardDate date = {props.date}/>
        </div>

    </div>
  )
}

export default BoardCard

// In the requirements below, the terms are quite general, since they depend on
// exactly what you planned out for your app.

// - A user should be able to create a **board/list**. Conceptually, a board/list
//   would contain many items that a user can add.
// - For each board, a user should be able to add **board items/tasks**.
// - Board items should have:
//   - A due date
//   - A title
//   - A boolean flag for completd or not completed
//   - An assignee (someone it is assigned to). It can be any random string that
//     the user wants.
//   - Anything else that you decide