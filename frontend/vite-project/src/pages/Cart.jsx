import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart, updateQty }) {
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="cart-no-items">
          <div className="cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products to start shopping.</p>

          <button
            className="go-shopping-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items-section">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                {/* Product Image */}
                <div className="cart-image-box">
                  <img
                    src={
                      item.image ||
                      "https://via.placeholder.com/120?text=No+Image"
                    }
                    alt={item.name}
                    className="cart-item-image"
                  />
                </div>

                {/* Product Details */}
                <div className="cart-middle">
                  {item.category && (
                    <span className="cart-category">
                      {item.category}
                    </span>
                  )}

                  <h3>{item.name}</h3>

                  <p className="cart-price">
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Quantity */}
                <div className="cart-qty-box">
                  <label>Qty</label>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      updateQty(index, Number(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5].map((qty) => (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subtotal + Remove */}
                <div className="cart-right">
                  <p className="item-subtotal">
                    ₹
                    {Number(
                      item.price * item.qty
                    ).toLocaleString("en-IN")}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>
                ₹{Number(totalPrice).toLocaleString("en-IN")}
              </span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="summary-row total-row">
              <span>Total</span>
              <span>
                ₹{Number(totalPrice).toLocaleString("en-IN")}
              </span>
            </div>

            <button
              className="place-order-btn"
              onClick={() => navigate("/payment")}
            >
              Proceed to Checkout
            </button>

            <button
              className="continue-shopping-btn"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;