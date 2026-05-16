import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home({ products, searchTerm, addToCart }) {
  return (
    <div className="home-container">
      <section className="products-section">
        <div className="products-header">
          <h2 className="home-title">Our Collection</h2>
          {searchTerm && (
            <p className="search-result-text">
              Showing results for: <strong>"{searchTerm}"</strong>
            </p>
          )}
        </div>

        {products.length > 0 ? (
          <div className="products-container">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <div className="no-products-icon">🔍</div>
            <h3>No products found</h3>
            <p>Try searching for something else</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;