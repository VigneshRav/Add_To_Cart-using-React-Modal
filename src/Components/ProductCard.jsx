import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="p-4 rounded-lg border-1 border-sky-600 flex flex-col hover:scale-102 transition shadow-lg shadow-sky-200">
      <h2 className="text-2xl font-sans italic font-bold pb-4">
        {product.category}
      </h2>
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="text-xl font-bold text-blue-950">{product.title}</h3>
      <div className="text-amber-950 pt-4 font-semibold">
        <p>Rating: ⭐ {product.rating.rate}/5</p>
        <p>Stock Available: {product.rating.count}</p>
      </div>

      <h3 className="text-red-600 py-2 font-bold">Price: ${product.price}</h3>

      <button
        className="bg-violet-950 font-semibold text-white flex justify-evenly mt-auto py-2 mb-0 gap-2 rounded hover:bg-red-600 cursor-pointer"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
