import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="text-white p-5 bg-gray-500">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-4xl italic font-serif font-extralight">Shopify!</h1>
        <button
          className="bg-orange-700 px-2 py-2 flex justify-between rounded focus:outline-none gap-2 cursor-pointer"
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
