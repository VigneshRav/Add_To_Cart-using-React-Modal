import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="text-white p-3 bg-orange-400">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-3xl font-bold">Shopify!</h1>
        <button
          className="bg-gray-800 px-4 py-2 flex justify-between rounded focus:outline-none"
          onClick={openCart}
        >
          <IoCartOutline />
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
