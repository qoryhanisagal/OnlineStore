// TeaFilter.jsx - Page that lets users filter and view tea products by category.
// Uses mock data and displays results in a responsive grid using the Product component.
import { useState, useEffect } from "react";
import DataService from "../../services/DataService";
import "./TeaFilter.css";
import FilterOption from "../../components/FilterOption";
import Product from "../../components/Product";

// TeaFilter component manages filter state and renders the product grid
function TeaFilter() {
  // State for tracking which tea category is selected
  const [selectedCategory, setSelectedCategory] = useState("All");
  // State for storing the product data
  const [products, setProducts] = useState([]);
  // State for storing the category data
  const [categories, setCategories] = useState(["All"]);
  // State for tracking loading status
  const [loading, setLoading] = useState(true);

  // Fetch the catalog from the backend (like Catalog.jsx does)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await DataService.getCatalog(); // Fetches real product data
        setProducts(data);
        console.log("✅ Products from API:", data);
        const categoryData = await DataService.getCategories(); // Fetches real category data
        setCategories(["All", ...categoryData]);
        setLoading(false);
      } catch (err) {
        console.error("❌ Failed to load tea products:", err);
      }
    };

    fetchData();
  }, []);

  // Filter product list based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((prod) => prod.category === selectedCategory);

  if (loading) {
    return <div className="tea-filter-page"><p>Loading teas...</p></div>;
  }

  return (
    <>
      {/* Page container for tea filter view */}
      <div className="tea-filter-page">
        {/* Page title */}
        <h1>Our Tea Selction</h1>

        {/* Filter buttons generated from categories */}
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

        {/* Display filtered product cards */}
        <div className="productlist">
          {filteredProducts.map((item) => (
            <Product key={item._id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default TeaFilter;