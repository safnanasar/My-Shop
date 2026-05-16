import "./Success.css";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="success-container">
      <div className="success-card">

        <div className="success-icon-ring">
          <div className="success-checkmark">✓</div>
        </div>

        <h1 className="success-title">Order Placed!</h1>
        <p className="success-message">
          Thank you for shopping with us. Your order is confirmed and will be delivered soon.
        </p>

        <div className="success-divider" />

        <div className="success-info">
          <div className="success-info-item">
            <span className="info-icon">📦</span>
            <span>Order being prepared</span>
          </div>
          <div className="success-info-item">
            <span className="info-icon">🚚</span>
            <span>Delivery within 3–5 days</span>
          </div>
          <div className="success-info-item">
            <span className="info-icon">💌</span>
            <span>Confirmation sent to your email</span>
          </div>
        </div>

        <Link to="/" className="back-home-btn">
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}

export default Success;