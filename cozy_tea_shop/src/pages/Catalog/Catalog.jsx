{ /* Catalog.jsx - Page that displays a list of all available tea products using mock data. */}
import Product from "../../components/Product/Product";
import "./Catalog.css";

// Static mock product data for display in the catalog
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

function Catalog() {
  return (
    <>
      {/* Container for the entire catalog page */}
      <div className="catalog">
        {/* Catalog heading */}
        <h1>Check out our amazing catalog!</h1>
  
        {/* Grid of all Product components mapped from mock data */}
        <div className="productlist">
          {mockData.map((item) => (
            <Product key={item._id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

// Export the Catalog component for use in routing
export default Catalog;