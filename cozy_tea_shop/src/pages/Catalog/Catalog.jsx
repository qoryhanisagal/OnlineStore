import { useEffect, useState } from "react";
import DataService from "../../services/DataService";
import Product from "../../components/Product/Product";
import FilterOption from "../../components/FilterOption"; 
import "./Catalog.css";
import bannerImg from "../../assets/banner-tea-floating.png";

// // Static mock product data for display in the catalog
// const mockData = [
// ];

function Catalog() {
  // Step 1: Set up local state to store product data
  // `products` will hold the list of products fetched from the backend
  // `setProducts` is the function used to update that state
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: useEffect hook runs once when this component first mounts (loads)
  // I use this to fetch data when the page opens
  useEffect(() => {
    // Step 3: Define an async function inside useEffect
    // I can't make the useEffect itself async, so I define fetchCatalog here
    const fetchCatalog = async () => {
      try {
        // Step 4: Call the DataService to fetch the product catalog from the backend API
        // This is an asynchronous request — we use `await` to pause until it returns
        const data = await DataService.getCatalog();

        // Step 5: Update local state with the fetched data
        // This triggers a re-render of the component with the new product list
        setProducts(data);
        const catData = await DataService.getCategories();
        setCategories(["All", ...catData]);
      } catch (err) {
        // Step 6: Catch and log any errors that occur during the fetch process
        // This helps with debugging in case the backend is down or the API fails
        console.error("❌ Failed to fetch catalog:", err);
      }
    };

    // Step 7: Call the fetchCatalog function to start the process
    fetchCatalog();

    // Step 8: The empty dependency array [] ensures this useEffect runs only once when the component mounts
    // It does NOT run again unless the component is reloaded
  }, []);
  // Step 9: Render the component
  // The component returns JSX that describes what should be displayed on the page
  // The JSX includes a heading and a grid of Product components
  // Each Product component is passed a single product's data as props
  // The key prop is used by React to identify each component uniquely
  // This is important for performance and to avoid unnecessary re-renders
  // The key should be a unique identifier for each product, like its ID
  // In this case, we use item._id as the key
  // The Product component is imported from the components directory
  // The Product component is responsible for displaying individual product details
  // The Product component is reusable and can be used to display any product
  // The Product component is passed the product data as props
  // The Product component is responsible for rendering the product details
  // The Product component is reusable and can be used to display any product
    const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((prod) => prod.category === selectedCategory);
    // The filteredProducts array contains only the products that match the selected category
  return (
    <>
      {/* Container for the entire catalog page */}
      <div className="catalog">
        {/* Hero banner section */}
        <section className="hero-section">
          <div className="hero-content">
            <h2 className="hero-heading">Our Tea Selection</h2>
          </div>
          <img className="floating-image catalog-banner" src={bannerImg} alt="Floating tea packs" />
        </section>

        <div className="filters">
          {categories.map((cat) => (
            <FilterOption
              key={cat}
              label={cat}
              isActive={selectedCategory === cat}
              onClick={setSelectedCategory}
            />
          ))}
        </div>

        {/* Grid of all Product components mapped from mock data */}
        <div className="productlist">
          {filteredProducts.map((item) => (
            <Product key={item._id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

// Export the Catalog component for use in routing
export default Catalog;