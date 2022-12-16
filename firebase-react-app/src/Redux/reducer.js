
//actions
export function addList() {
return {
  type:"ADD_LIST"
}
}

export function deleteList(id) {
return {
  type: "DELETE_LIST",
  payload: { id }
}
}

export function changeTitle(id,title) {
return {
  type: "CHANGE-TITLE",
  payload: { id, title }
}}


export const boardReducer = (state = [], action) => {
  const {type,payload} = action
  switch(type) {
    case "ADD_LIST": 
    return [...state, {title:"",cards:[]}]
  
    case "MOVE_LIST": {
      break;
    }
    
    case "CHANGE-TITLE":
    return  {...state,title:action.payload.title}   
   

    case "DELETE_LIST": {
      const newList = state.filter((e) => e.id !== payload.id)
      return newList
    }
    default:
      return state
  }

}

export default boardReducer