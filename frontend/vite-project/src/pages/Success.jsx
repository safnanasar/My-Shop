import "./Success.css";

function Success() {
  return (
    <div className="success-container">
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Your order will be delivered soon.</p>
      <a href="/" className="back-home-btn">Back to Home</a>
    </div>
    
  );
}

export default Success;