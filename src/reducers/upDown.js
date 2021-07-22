
const initialState=0;

const changeNumberReducer = (state=initialState, action) => {
  debugger
    switch(action.type){
        case "INCREMENT": return state+1;
        case "DECREMENT": return state-1;
        default: return state;  
  }
}
export default changeNumberReducer;
