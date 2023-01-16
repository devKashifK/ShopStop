const CartItemsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GETDATA": {
      return {...state, ShowModal: true, dataModal: payload.item,
      };
    }
    case "HIDE" :  {
        return {...state, ShowModal : false,}
    }

    default:
      throw new Error("Problem in code");
  }
};
export default CartItemsReducer;
