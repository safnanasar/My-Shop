
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        className="product-image"
      />

      <h3 className="product-name">{product.name}</h3>

      <p className="product-price">₹{product.price}</p>

      <button
        className="add-cart-btn"
        onClick={() => addToCart(product )}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;
