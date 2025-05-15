import { useState, useEffect } from "react";
import DataService from "../../services/DataService";
import bannerImgDefault from "../../assets/banner-tea-floating.png";
import bannerImgGreen from "../../assets/banner-green-tea.png";
import bannerImgBlack from "../../assets/banner-black-tea.png";
import bannerImgHerbal from "../../assets/banner-herbal-tea.png";
import bannerImgChai from "../../assets/banner-chai-tea.png";
import bannerImgRooibos from "../../assets/banner-rooibos-tea.png";
import bannerImgWellness from "../../assets/banner-wellness-tea.png";
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
  const [imageKey, setImageKey] = useState(0);

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

  useEffect(() => {
    setImageKey(prev => prev + 1);
  }, [selectedCategory]);

  // Filter product list based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((prod) => prod.category === selectedCategory);

  if (loading) {
    return <div className="tea-filter-page"><p>Loading teas...</p></div>;
  }

  // Determine the banner image based on the selected category
  // Choose the right image based on the selected category
const getHeroImage = () => {
  switch (selectedCategory) {
    case "Green":
      return bannerImgGreen;
    case "Black":
      return bannerImgBlack;
    case "Herbal":
      return bannerImgHerbal;
    case "Chai":
      return bannerImgChai;
    case "Rooibos":
      return bannerImgRooibos;  
    case "Wellness":    
      return bannerImgWellness;
    case "All":
      return bannerImgDefault;
    default:
      return bannerImgDefault;
  }
};

  return (
    <>
      {/* Container for the entire catalog page */}
      <div className="catalog">
        {/* Hero banner section */}
        <section className="hero-section hero-yellow">
          <div className="hero-content">
            <h2 className="hero-heading">
              {selectedCategory === "All"
                ? "Our Tea Selection"
                : `${selectedCategory.replace(" Tea", "")} Tea Selection`}
            </h2>
          </div>
          <img
            key={imageKey}
            className={`floating-image ${selectedCategory === "All" ? "default-banner" : ""} animate-slide`}
            src={getHeroImage()}
            alt={`${selectedCategory} tea banner`}
          />
        </section>
        

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