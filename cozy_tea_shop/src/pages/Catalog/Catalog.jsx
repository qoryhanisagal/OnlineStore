import { useEffect, useState } from "react";
import DataService from "../../services/DataService";
import Product from "../../components/Product/Product";
import "./Catalog.css";

// // Static mock product data for display in the catalog
// const mockData = [
// ];

function Catalog() {
  // Step 1: Set up local state to store product data
  // `products` will hold the list of products fetched from the backend
  // `setProducts` is the function used to update that state
  const [products, setProducts] = useState([]);

  // Step 2: useEffect hook runs once when this component first mounts (loads)
  // We use this to fetch data when the page opens
  useEffect(() => {
    // Step 3: Define an async function inside useEffect
    // We can't make the useEffect itself async, so we define fetchCatalog here
    const fetchCatalog = async () => {
      try {
        // Step 4: Call the DataService to fetch the product catalog from the backend API
        // This is an asynchronous request — we use `await` to pause until it returns
        const data = await DataService.getCatalog();

        // Step 5: Update local state with the fetched data
        // This triggers a re-render of the component with the new product list
        setProducts(data);
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
  return (
    <>
      {/* Container for the entire catalog page */}
      <div className="catalog">
        {/* Catalog heading */}
        <h1>Check out our amazing catalog!</h1>
  
        {/* Grid of all Product components mapped from mock data */}
        <div className="productlist">
          {products.map((item) => (
            <Product key={item._id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

// Export the Catalog component for use in routing
export default Catalog;