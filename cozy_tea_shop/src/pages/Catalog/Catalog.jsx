import Product from "../../components/Product";
import "./Catalog.css";

const mockData = [
    {
        "title": "",
        "price": 18.92,
        "category": "Fruit",
        "image": "/imgaes/sdku.png",
        "_id": "1234332"
    },


]
function Catalog() {
  return (
    <div className="catalog">
      <h1>Check out our amazing catalog!</h1>

      <div className="productlist">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>

    </div>
  );
}

export default Catalog;