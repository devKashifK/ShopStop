import React, { useReducer, useEffect, useState } from "react";
import AppContext from "./GlobalState";
import StateReducer from "./AppReducer";
import CartReducer from "./CartReducer";
import CountReducer from "./CounterReducer";
import CartItemsReducer from "./CartItemsReducer";

export default function AppState(props) {
  const CartItemsState = {
    ShowModal: false,
    dataModal: [],
  };
  const [CartItems, CartItemsDispatch] = useReducer(
    CartItemsReducer,
    CartItemsState
  );

  const [activeState, activeDispatch] = useReducer(StateReducer, {
    active: false,
  });
  const [CartState, CartDispatch] = useReducer(CartReducer, {
    total: 0,
    totalItem : 0,
    products: [],
  });

  const [CountState, CountDispatch] = useReducer(CountReducer, 0);

  function ChangeValue() {
    activeDispatch({ type: "ACTIVE" });
  }

  function GetValues(item) {
    const getItem = item;
    CartItemsDispatch({
      type: "GETDATA",
      payload: {
        item: getItem,
      },
    });
  }
  function Addtocart(product) {
    const updateCard = CartState.products.concat(product);
    CartDispatch({
      type: "ADD",
      payload: {
        products: updateCard,
      },
    });
  }

  function RemoveFromcart(product) {
    const updateCard = CartState.products.filter(
      (currentProduct) => currentProduct.id !== product.id
    );
    
    CartDispatch({
      type: "REMOVE",
      payload: {
        products: updateCard,
      },
    });
  }
  function UpdatePrice() {
    let {total , totalItem } = CartState.products.reduce(
      (calculatedValue, currentValue) => {
        let { qty, price } = currentValue;
        const totalPrice = qty * price;
        calculatedValue.total += totalPrice;
        calculatedValue.totalItem += qty;
        return calculatedValue;
      },
      {
        totalItem: 0,
        total : 0,
      }
    );
    CartDispatch({
      type: "UPDATEDCART",
      payload: {
        total,
        totalItem
      },
    });
  }

    

  function Increaseqty(id) {
    CartDispatch({ type: "INCREMENT", payload: id });
  }
  function Decreaseqty(id) {
    CartDispatch({ type: "DECREMENT", payload: id });
  }

  const [Prod, setProd] = useState([]);

  const URL = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setProd(data));
  }, []);
  return (
    <AppContext.Provider
      value={{
        activeState,
        activeDispatch,
        ChangeValue,
        CartDispatch,
        CartState,
        Prod,
        setProd,
        CountState,
        CountDispatch,
        RemoveFromcart,
        Addtocart,
        CartItems,
        CartItemsDispatch,
        Increaseqty,
        Decreaseqty,
        GetValues,
        UpdatePrice
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
