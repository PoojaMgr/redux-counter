import changeNumberReducer from './upDown';
 import { combineReducers } from "redux";

 const rootReducer = combineReducers({
     changeNumber: changeNumberReducer
 })

 export default rootReducer;