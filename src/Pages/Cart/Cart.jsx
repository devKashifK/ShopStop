import React, { useContext, useEffect } from "react";
import AppContext from "../../GlobalStates/GlobalState";
import {
  CaptionHeading,
  UnitPrice,
  ProductCategory,
  ProductTitle,
} from "../../StyledComponents/StyledComponents";
import { GrFormClose } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import "./cart.css";
import Counter from "../../Common/counter/Counter";


export default function Cart(props) {
  const { CartState, RemoveFromcart, UpdatePrice } = useContext(AppContext);
  const { showCart, setShowCart } = props;
  const Products = CartState.products;

  useEffect(() => {
    // CartDispatch({type : "UPDATEDCART",})
    UpdatePrice();
    console.log("yes");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CartState.products]);

  return (
    <section
      className={showCart === true ? "cart_page show_cart" : "cart_page"}
    >
      <div className="shopping_cart_heading">
        <CaptionHeading>Shopping Cart</CaptionHeading>
        <span
          className="cart_close_btn"
          onClick={() => {
            setShowCart(false);
          }}
        >
          <GrFormClose />
        </span>
      </div>

      <div className="cart_container">
        {Products.length ? (
          Products.map((item) => {
            return (
              <div className="cart_products" key={item.id}>
                <span
                  className="cart_prod_delete"
                  onClick={() => RemoveFromcart(item)}
                >
                  {" "}
                  <AiFillDelete />{" "}
                </span>
                <div className="cart_img_cont">
                  <img
                    className="cart_img"
                    src={Products ? item.images[0] : "null"}
                    alt=""
                  />
                </div>
                <div className="car_prod_detail">
                  <ProductCategory style={{fontWeight : "400"}}> {item.title} </ProductCategory>
                  <UnitPrice style={{ fontWeight: "400" }}>
                    Unit Price : ₹{item.price}
                  </UnitPrice>
                  <Counter item={item} />
                  <UnitPrice
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "14px",
                      color: "var(--black)",
                      position: "absolute",
                      bottom: "21%",
                      right: "0%",
                    }}
                  >
                    {" "}
                    ₹{item.price * item.qty}
                  </UnitPrice>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empy_cart">
            <div className="empty_img"></div>
            <ProductTitle>Your Cart Is Empty</ProductTitle>
          </div>
        )}
      </div>
      <div
        className="checkout_btn"
        style={{
          backgroundColor: `${
            Products.length ? "var(--black)" : "var(--text)"
          }`,
        }}
      >
        Proceed To Checkout <span>| {CartState.total}</span>
      </div>
    </section>
  );
}
