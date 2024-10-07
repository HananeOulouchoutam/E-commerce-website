import React from "react";
import "./NavBar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const NavBar = () => {
  const [menu, setMenu] = React.useState("Shop");

  const {getTotalCartItems} = React.useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo of this e-commerce website" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          {" "}
          <Link to="/">Shop</Link> {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link to="/mens">Men</Link> {menu === "Men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link to="/women">Women</Link> {menu === "Women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link to="/kids">Kids</Link> {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/loginsignup">
          <button>Login</button>
        </Link>
        <Link to="cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default NavBar;
