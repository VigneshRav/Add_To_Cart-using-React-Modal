import React from "react";

const CartModal = ({ cart, closeModal, removeFromCart }) => {
  console.log("modal");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <img
            src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg"
            alt="Your Cart is Empty"
            className="h-40 w-full object-contain mb-4"
          />
        ) : (
          <ul>
            {cart.map((item) => {
              return (
                <li key={item.id} className="mb-4 flex justify-between">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-purple-600"
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <button
          onClick={closeModal}
          className="bg-gray-800 text-white mt-4 px-4 py-2 rounded hover:bg-red-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
