import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

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
  const [searchTerm, setSearchTerm] = useState("");

  // Load logged-in user
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) setUser(savedUser);
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch products
  useEffect(() => {
    fetch("https://my-shop-7fuy.onrender.com/api/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  // Filter products by search only
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  // Add to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
    alert("Added to cart");
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Update quantity
  const updateQty = (index, qty) => {
    if (qty <= 0) { removeFromCart(index); return; }
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].qty = qty;
      return updatedCart;
    });
  };

  // Total cart items
  const cartCount = cart.reduce((total, item) => total + (item.qty || 1), 0);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">My Store</Link>
        </div>

        <div className="nav-center">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/cart" className="cart-link">
            <ShoppingCart size={20} />
            <span className="cart-count">{cartCount}</span>
          </Link>

          {user ? (
            <>
              <span className="welcome-text">Welcome, {user}</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home products={filteredProducts} searchTerm={searchTerm} addToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />} />
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