const CartReducer = (state, action ) => {
  const {type, payload} = action
  switch (type) {
    case "ADD": {
      return {...state,  products:payload.products,  };
    }
    case "REMOVE" : {
      return {...state, products : payload.products , }
      
    }
    case "INCREMENT" : {
      return {...state ,  products : state.products.map((currentItem) =>
        currentItem.id === action.payload 
          ? ({...currentItem, qty: currentItem.qty + 1 })
          : currentItem
      )}
    }
    case "DECREMENT" : {
      return {...state , products : state.products.map((currentItem) =>
        currentItem.id === action.payload ? ({...currentItem, qty : currentItem.qty -1})
        : currentItem
        )}
    }
    
    case "UPDATEDCART" : {
      return{...state, totalItem: payload.totalItem, total: payload.total}
    }
    default: throw new Error("Error In Global State");
  }
};
export default CartReducer;