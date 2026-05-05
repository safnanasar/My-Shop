import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart, updateQty }) {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((t, i) => t + i.price * i.qty, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <div className="cart-no-items">
          <div className="cart-icon">🛒</div>
          <h1>Your cart is empty</h1>
          <p>Add some items to get started</p>
          <button className="go-shopping-btn" onClick={() => navigate("/")}>
            Go Shopping
          </button>
        </div>

      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>

              <div className="cart-left">
                <img
                  src={item.image || "https://via.placeholder.com/100"}
                  alt={item.name}
                />
                <select
                  value={item.qty}
                  onChange={(e) => {
                    const newQty = Number(e.target.value);
                    updateQty(index, newQty);
                  }}
                >
                  {[1, 2, 3, 4, 5].map(q => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
              </div>

              <div className="cart-middle">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <div className="cart-right">
                <button onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>

            </div>
          ))}

          <h3>Total: ₹{totalPrice}</h3>

          <button className="place-order-btn" onClick={() => navigate("/payment")}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;