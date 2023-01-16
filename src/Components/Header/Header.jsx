import React, { useState } from "react";
import { useContext } from "react";
import AppContext from "../../GlobalStates/GlobalState";
import { Link } from "react-router-dom";
import "./Header.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiMenu3Line } from "react-icons/ri";
import { BsSearch, BsCart } from "react-icons/bs";
import {
  AiOutlineCloseCircle,
  AiOutlineYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import Cart from "../../Pages/Cart/Cart";

export default function Header() {
  const { activeState, ChangeValue, CartState,  } =
    useContext(AppContext);
  const { active } = activeState;
  const [showCart, setShowCart] = useState(false)

  return (
    <section className="header">
      <div className="header_logo">
        <div className="toggle" onClick={() => ChangeValue()}>
          {active === true ? <RiMenu3Line /> : <HiOutlineMenuAlt1 />}
        </div>
        <h3 className="logo_heading">
          Shop<span className="logo_heading-colored">Store </span>
        </h3>
      </div>
      <div className="header_buttons">
        <div className="search">
          <BsSearch strokeWidth={0.4} />
        </div>
        <div className="profile">Sign In</div>
        <div className="cart_toggle_button" onClick={() => setShowCart(true)}>
          <BsCart strokeWidth={0.4} /><span className="cart_length">{CartState.totalItem}</span>
        </div>
        <Cart showCart = {showCart} setShowCart = {setShowCart} />
      </div>
      <div className={active === true ? "menu menu_active" : "menu"}>
        <div className="logo-sidebar">
          <h3 className="logo_text_sidebar">Shop Stop</h3>
          <span className="close_sidebar" onClick={() => ChangeValue()}>
            {" "}
            <AiOutlineCloseCircle />
          </span>
        </div>
        <div className="links_sidebar_cont">
          <Link to="/" className="links-sidebar">
            <li onClick={() => ChangeValue()}>Home</li>
          </Link>
          <Link to="/Mens" className="links-sidebar">
            <li onClick={() => ChangeValue()}>Mens</li>
          </Link>
          <Link to="/Womens" className="links-sidebar">
            <li onClick={() => ChangeValue()}>Womens</li>
          </Link>
          <Link to="/Kids" className="links-sidebar">
            <li onClick={() => ChangeValue()}>Kids</li>
          </Link>
          <Link to="/About" className="links-sidebar">
            <li onClick={() => ChangeValue()}>About</li>
          </Link>
          <Link to="/Contact" className="links-sidebar">
            <li onClick={() => ChangeValue()}>Contact</li>
          </Link>
          <Link to="/Cart" className="links-sidebar">
            <li onClick={() => ChangeValue()}>Cart</li>
          </Link>
        </div>
        <div className="socail_links">
          <span className="facebook">
            <MdFacebook />
          </span>
          <span className="youtube">
            <AiOutlineYoutube />
          </span>
          <span className="twitter">
            <AiFillTwitterCircle />
          </span>
          <span className="instagram">
            <FaInstagram />
          </span>
        </div>
      </div>
    </section>
  );
}
