import { combineReducers } from "redux";
import {boardReducer} from "./reducer";


const rootReducer = combineReducers({
  lists: boardReducer,
});

export default rootReducer