const CountReducer = (state, action) => {

    switch(action.type){
   case  "ADDCOUNT" : {
       return (state + 1);
  }
  case "SUBTRACTCOUNT" : {
    return (state - 1);
  }
  default : throw new Error("Count Is Not Working")
}
}
export default CountReducer;