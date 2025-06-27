import React from "react";
import { IoCartOutline } from "react-icons/io5";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold pb-4 text-pink-800">
        {product.category}
      </h2>
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="text-xl font-semibold text-blue-800">{product.title}</h3>
      <h3 className="text-red-600 py-2 font-semibold">${product.price}</h3>
      <a href="">More Info</a>
      <div className="flex justify-between">
        <p>{product.rating.rate}</p>
        <p>{product.rating.count}</p>
      </div>

      <button
        className="bg-purple-600 font-semibold text-white flex justify-evenly px-4 py-2 rounded hover:bg-red-500"
        onClick={() => addToCart(product)}
      >
        <IoCartOutline />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
