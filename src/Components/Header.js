import React from "react";
import App from "../App.css";
import AddToCart from "./AddToCart.jpg";

function Header(props) {
  console.warn("Header",props.cartData);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.cartData.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
    </div> 
  );
}

export default Header;
