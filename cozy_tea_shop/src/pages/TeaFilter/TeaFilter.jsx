// TeaFilter.jsx - Page that lets users filter and view tea products by category.
// Uses mock data and displays results in a responsive grid using the Product component.
import { useState } from "react";
import "./TeaFilter.css";
import FilterOption from "../../components/FilterOption";
import Product from "../../components/Product";


// Available filter categories including 'All' to show every product
const mockCategories = ["All", "Black", "Chai", "Green", "Herbal", "Rooibos", "Wellness"];

// Static tea product data used to populate the filtered product grid.
// Each product includes an ID, title, price, category, and image path.
const mockData = [
  {
    _id: "t001",
    title: "Soothing Chamomile",
    price: 12.99,
    category: "Herbal",
    image: "/img/blacktea.png"
  },
  {
    _id: "t002",
    title: "Organic Green Zen",
    price: 14.50,
    category: "Green",
    image: "/img/greentea.png"
  },
  {
    _id: "t003",
    title: "Vanilla Rooibos Bliss",
    price: 13.75,
    category: "Rooibos",
    image: "/img/minttea.png"
  },
  {
    _id: "t004",
    title: "Spiced Chai Classic",
    price: 15.20,
    category: "Chai",
    image: "/img/rooibostea.png"
  },
  {
    _id: "t005",
    title: "English Breakfast Bold",
    price: 11.99,
    category: "Black",
    image: "/img/blacktea.png"
  },
  {
    _id: "t006",
    title: "Lemon Ginger Revive",
    price: 13.25,
    category: "Wellness",
    image: "/img/greentea.png"
  },
  {
    _id: "t007",
    title: "Peppermint Breeze",
    price: 10.80,
    category: "Herbal",
    image: "/img/minttea.png"
  },
  {
    _id: "t008",
    title: "Jasmine Green Delight",
    price: 14.90,
    category: "Green",
    image: "/img/rooibostea.png"
  },
  {
    _id: "t009",
    title: "Turmeric Glow",
    price: 16.50,
    category: "Wellness",
    image: "/img/blacktea.png"
  },
  {
    _id: "t010",
    title: "Jasmine Chai Bliss",
    price: 14.75,
    category: "Chai",
    image: "/img/greentea.png"
  },
  {
    _id: "t011",
    title: "Vanilla Rooibos Dream",
    price: 13.25,
    category: "Rooibos",
    image: "/img/rooibostea.png"
  },
  {
    _id: "t012",
    title: "Minty Herbal Breeze",
    price: 12.00,
    category: "Herbal",
    image: "/img/minttea.png"
  }
];

// TeaFilter component manages filter state and renders the product grid
function TeaFilter() {
  // State for tracking which tea category is selected
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter product list based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? mockData
      : mockData.filter((prod) => prod.category === selectedCategory);

    return (
      <>
        {/* Page container for tea filter view */}
        <div className="tea-filter-page">
          {/* Page title */}
          <h1>Filter by Tea Type</h1>
    
          {/* Filter buttons generated from mockCategories */}
          <div className="filters">
            {mockCategories.map((cat) => (
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