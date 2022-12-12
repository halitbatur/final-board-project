const initialState = [{
    title: "USER",
    id: 0,
    cards: [
        {
            id:0,
            task: "first task",
            completed: true
        },
        {
            id: 1,
            task: "second task",
            completed: false
        }
    ],
    filters: {
        status: 'All',
        colors: []
    },
}]

function nextTodoId(tasks) {
    const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1)
    return maxId + 1
  }

const ListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'tasks/tasksAdded': {

            return {

              ...state,

             tasks: [

                ...state.tasks,

                {
                  id: nextTodoId(state.tasks),
                  task: action.payload,
                  completed: false
                }
              ]
            }
          }
        default: 
        return state
    }
}

export default ListReducer;