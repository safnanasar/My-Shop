
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();

  const handlePayment = () => {
    // no real payment, just redirect
    navigate("/success");
  };
  const handleCancel = () => {
    if (window.confirm("Cancel this order?")) {
      navigate("/cart"); // go back to cart
    }
  };

  return (
    <div className="payment-container">
      <h2>Select Payment Method</h2>

      <div className="payment-options">
        <label>
          <input
            type="radio"
            value="cod"
            checked={method === "cod"}
            onChange={(e) => setMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label>
          <input
            type="radio"
            value="card"
            onChange={(e) => setMethod(e.target.value)}
          />
          Card Payment
        </label>
      </div>
      <div className="payment-actions">
        <button className="cancel-btn" onClick={handleCancel}>
          Cancel Order
        </button>

      <button className="pay-btn" onClick={handlePayment}>
        Place Order
      </button>
      </div>
    </div>
  );
}

export default Payment;