import React, { useContext, useState } from "react";
import "./modal.css";
import {
  ModalTitle,
  ProductDesc,
  ProductPrice,
  ProductPriceDis,
} from "../../StyledComponents/StyledComponents";
import { GrFormClose } from "react-icons/gr";
import Size from "../Size/Size";
import Colors from "../Colors/Color";
import AppContext from "../../GlobalStates/GlobalState";
import { useEffect } from "react";

export default function Modal(text) {
  const { CartItemsDispatch, CartItems, Addtocart, CartState, RemoveFromcart } =
    useContext(AppContext);
  const [inCart, SetInCart] = useState(false);
  const ModalData = CartItems.dataModal;
  const active = CartItems.ShowModal;

  useEffect(() => {
    const find = CartState.products.find(
      (index) => index.id === CartItems.dataModal.id
    );
    if (find) {
      SetInCart(true);
    } else {
      SetInCart(false);
    }
  }, [CartState, CartItems]);

  function Hide() {
    CartItemsDispatch({ type: "HIDE" });
  }

  const HandleClick = () => {
    const newProduct = ModalData;
    var pair = { qty: 1, itemTotalPrice: 0 };
    const product = { ...newProduct, ...pair };
    if (inCart === false) {
      Addtocart(product);
    } else {
      RemoveFromcart(product);
    }
  };

  return (
    <React.Fragment>
      <div className={active ? "show_modal modal" : "modal"}>
        <img
          className="modal_img"
          src={ModalData.images ? ModalData.images[0] : "null"}
          alt=""
        />
        <div className="modal_details">
          <ModalTitle> {ModalData.title} </ModalTitle>
          <ProductDesc style={{ lineHeight: "28px" }}>
            {ModalData.description}...
          </ProductDesc>
          <div className="modal_price_box">
            <ProductPrice style={{ fontSize: "24px", lineHeight: "32px" }}>
              ₹{ModalData.price}
            </ProductPrice>
            <ProductPriceDis
              style={{
                fontSize: "20px",
                lineHeight: "28px",
                display: "inline-block",
                color: "#999",
              }}
            >
              ₹{ModalData.price - 50}
            </ProductPriceDis>
          </div>
          <Size />
          <Colors />
          <div className="action_buttons">
            <button
              className={
                inCart === true
                  ? "modal_add_to_cart"
                  : "modal_add_to_cart modal_add_to_cart_active"
              }
              onClick={HandleClick}
            >
              {inCart ? "Remove from Cart" : "Add To Cart"}
            </button>
          </div>
          <button className="more_details"> View Details</button>
        </div>

        <button
          className="modal_close_button"
          onClick={() => {
            Hide();
          }}
        >
          {" "}
          <GrFormClose />{" "}
        </button>
      </div>
    </React.Fragment>
  );
}
