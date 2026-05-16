import "./Success.css";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="success-container">
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Your order will be delivered soon.</p>

      <Link to="/" className="back-home-btn">
        Back to Home
      </Link>
    </div>
  );
}

export default Success;