


const StateReducer = (state, action) => {

    switch(action.type){
        case "ACTIVE" : {
     
            const newState = {...state};

            newState.active = !newState.active;
       
            return newState;
        }
       
        default : throw new Error("Error In Global State");
    }
  
}
export default StateReducer;