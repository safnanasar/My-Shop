import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const updateQty = (index, qty) => {
    const updatedCart = [...cart];
    updatedCart[index].qty = qty;
    setCart(updatedCart);
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>
          <Link to="/" className="logo">My Store</Link>
        </h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cart.length})</Link>

          {user ? (
            <>
              <span className="welcome-text">Welcome, {user}</span>
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.removeItem("currentUser");
                  setUser(null);
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                updateQty={updateQty}
              />
            }
          />
          <Route path="/payment" element={<Payment cart={cart} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;