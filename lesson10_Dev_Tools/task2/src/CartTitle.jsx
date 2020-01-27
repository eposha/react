import React from "react";

const CartTitle = ({ count, userName }) => {
  return (
    <div className="cart-title">{`${userName}, you added ${count} products`}</div>
  );
};

export default CartTitle;
