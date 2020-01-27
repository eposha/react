import React from "react";

const ProductRow = ({ product }) => {
  const { stocked, name, price } = product;
  const names = stocked ? name : <span style={{ color: "red" }}>{name}</span>;

  return (
    <tr>
      <td>{names}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
