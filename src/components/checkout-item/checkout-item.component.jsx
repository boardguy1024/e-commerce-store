import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.actions";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, clearCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
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
  clearCart: item => dispatch(clearItemFromCart(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
