import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();

  const handlePayment = () => {
    localStorage.setItem("paymentMethod", method);
    navigate("/success");
  };

  const handleCancel = () => {
    if (window.confirm("Cancel this order?")) {
      navigate("/cart");
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="payment-title">Payment Method</h2>
        <p className="payment-subtitle">Choose how you'd like to pay</p>

        <div className="payment-options">
          <label className={`payment-option ${method === "cod" ? "selected" : ""}`}>
            <input
              type="radio"
              value="cod"
              checked={method === "cod"}
              onChange={(e) => setMethod(e.target.value)}
            />
            <div className="option-icon">🚚</div>
            <div className="option-info">
              <span className="option-title">Cash on Delivery</span>
              <span className="option-desc">Pay when your order arrives</span>
            </div>
          </label>

          <label className={`payment-option ${method === "card" ? "selected" : ""}`}>
            <input
              type="radio"
              value="card"
              checked={method === "card"}
              onChange={(e) => setMethod(e.target.value)}
            />
            <div className="option-icon">💳</div>
            <div className="option-info">
              <span className="option-title">Card Payment</span>
              <span className="option-desc">Pay securely with your card</span>
            </div>
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
    </div>
  );
}

export default Payment;