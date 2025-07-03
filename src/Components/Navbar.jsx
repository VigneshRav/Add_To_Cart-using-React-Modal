import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="text-white p-5 bg-gradient-to-l from-purple-900 via-blue-800 to-violet-950">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-4xl italic font-serif font-extralight">Shopify!</h1>
        <button
          className="bg-gray-800 px-2 py-2 flex justify-between rounded-lg focus:outline-none gap-2 cursor-pointer hover:bg-red-700"
          onClick={openCart}
        >
          <p className="pt-1">
            <IoCartOutline />
          </p>
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
