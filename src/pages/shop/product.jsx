import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      {cartItemCount > 0 ? (
        <div className="flex gap-2 justify-center items-center w-full p-[5px_0]">
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            +
          </button>
          <p className="text-xl">{cartItemCount}</p>
          <button onClick={() => removeFromCart(id)} className="addToCartBttn">
            -
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(id)}
          className="p-2 m-1 border-zinc-500 rounded-md border-solid border"
        >
          add to cart
        </button>
      )}
    </div>
  );
};
