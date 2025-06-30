import React from "react";

const CartModal = ({ cart, closeModal, removeFromCart }) => {
  return (
    <div className="fixed inset-0 bg-cyan-200 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto scrollbar-hide">
        <h2 className="text-2xl font-extrabold mb-8 font-serif text-orange-900">
          Your Cart 🛒
        </h2>
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
                <li key={item.id} className="mb-12 flex justify-between">
                  <div className="flex gap-10 w-full shadow-2xl">
                    <img
                      src={item.image}
                      alt="Product Image"
                      className="h-40 w-1/2 object-contain mb-2"
                    />

                    <div>
                      <h3 className="text-blue-800 font-bold pt-4 pb-2 text-start">
                        {item.title}
                      </h3>
                      <p className="text-red-500 font-bold pb-6">
                        Price: ${item.price}
                      </p>
                      <div className="text-end mr-2 mb-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-gray-900 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                        >
                          Remove from cart
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <button
          onClick={closeModal}
          className="bg-amber-900 text-white mt-4 px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
