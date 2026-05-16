import ProductCard from "../components/ProductCard";
import "./Home.css";

// Define categories here if not passed from parent
const DEFAULT_CATEGORIES = ["All", "Electronics", "Jewelleries", "Cosmetics", "Gents", "Ladies"];

function Home({
  products,
  categories = DEFAULT_CATEGORIES,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  addToCart,
}) {
  return (
    <div className="home-container">
      <div className="categories-container">
        {categories?.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-header">
          <h2 className="home-title">
            {selectedCategory === "All"
              ? "Products"
              : `${selectedCategory} Products`}
          </h2>

          {searchTerm && (
            <p className="search-result-text">
              Search results for: <strong>"{searchTerm}"</strong>
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
            <h3>No products found</h3>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;