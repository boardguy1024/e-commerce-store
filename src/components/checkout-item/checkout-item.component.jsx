import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, clearCart, removeCartItem, addCartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeCartItem(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addCartItem(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => {
          clearCart(cartItem);
        }}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: item => dispatch(clearItemFromCart(item)),
  addCartItem: item => dispatch(addItem(item)),
  removeCartItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
