## 🛒 Add to Cart Using React Modal

A simple and responsive ReactJS application that fetches product data from the Fake Store API, displays them in a card layout, and allows users to add or remove products from a shopping cart via a modal interface.

---

## 📎 API Used:

**Fake Store API**: https://fakestoreapi.com/products

---

## 📋 Features:

- ✅ Fetch products from the Fake Store API.
- 🖼️ Displaying product category, image, title, rating, count and price with a add to cart button in 
      a user-friendly layout.
- ➕ Add products to cart with a button.
- ⚠️ Alert user if the item is already in the cart.
- 🛍️ Cart item count shown in the Navbar.
- 🪟 Modal displays all products in the cart.
- ❌ Remove products directly from the cart modal.
- 🔄 Dynamic cart updates based on user interaction.
- 📱 Fully responsive design for mobile and desktop.
- 🧼 Clean, well-documented and maintainable code.
---

## 🧪 Key Functionalities:

✅ Fetch product data on load using useEffect.
✅ Add items to cart using useState and prevent duplicates.
✅ Show alert message ("Item already added to the cart") for duplicates.
✅ Display cart modal on click of a cart button.
✅ Remove individual products from the cart.
✅ Recalculate cart count dynamically.

---

## 🛠 Tech Stack:

| Technology        | Description                        |
| ----------------- | ---------------------------------- |
| ReactJS           | JavaScript library for building UI |
| JavaScript (ES6+) | Logic and state management         |
| Tailwind CSS      | Utility-first CSS framework        |
| HTML5/CSS3        | Markup and styling                 |
| Fake Store API    | External API for product data      |

---

## 📦 Component Breakdown:

- App.jsx – Main component that manages global state (cart, products)
- Navbar.jsx – Displays the application name and a cart button displaying the cart count
- ProductList.jsx – Maps and displays all products
- ProductItem.jsx – Displays individual product with add-to-cart functionality
- CartModal.jsx – Modal for displaying and removing cart items

---

## 🔄 State Management & Data Flow:

- The cart state is managed in the App.jsx using React's useState hook.
- Product data is fetched via useEffect in the ProductList.
- Props are passed down from App.jsx to child components (Navbar, ProductList, and CartModal).

---

## 💻 Responsive Design:

- Built with Tailwind CSS
- Mobile-first approach
- Flexbox & grid layout for adaptive design

---

## ✂️ Future Improvements:

- Add quantity management per cart item.

- Persist cart in local storage or use Redux for larger applications.

- Integrate user authentication and backend.

---

## 🙋‍♂️ Author & Contact:
- Developed by: Vignesh R
- GitHub: @VigneshRav
- Email: vignesh212000@gmail.com

---
