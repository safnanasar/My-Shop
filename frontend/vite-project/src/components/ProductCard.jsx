import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  const {
    name,
    price,
    image,
    category,
    description,
  } = product;

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-wrapper">
        <img
          src={image || "https://via.placeholder.com/300x300?text=No+Image"}
          alt={name}
          className="product-image"
        />
      </div>

      {/* Product Info */}
      <div className="product-content">
        {category && (
          <span className="product-category">
            {category}
          </span>
        )}

        <h3 className="product-name">{name}</h3>

        {description && (
          <p className="product-description">
            {description.length > 70
              ? `${description.slice(0, 70)}...`
              : description}
          </p>
        )}

        <p className="product-price">
          ₹{Number(price).toLocaleString("en-IN")}
        </p>

        <button
          className="add-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;