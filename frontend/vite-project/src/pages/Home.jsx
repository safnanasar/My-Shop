import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home({ products, addToCart }) {
  return (
    <div className="home-container">

     
      <div className="search-wrapper">
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>

          <input
            placeholder="Search..."
            className="search-input"
          />
        </div>
      </div>

      <h2 className="home-title">Products</h2>

      <div className="products-container">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>

    </div>
  );
}

export default Home;