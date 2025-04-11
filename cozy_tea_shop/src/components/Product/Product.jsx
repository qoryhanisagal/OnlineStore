import "./Product.css";
// Notes: Come back and refactor this as a proper TeaCard component.
// The "Add to Bag" button and product images are not uniform in size or layout.
// Consider creating a separate TeaCard component for better reusability and styling control.
import QuantityPicker from "../QuantityPicker";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Product(props) {
  // I'm pulling from the cartcontext
  const { addToCart } = useContext(CartContext);

  // I'm using React state to track the quantity selected for this product
  const [quantity, setQuantity] = useState(1);
  
  // This callback updates the quantity when the QuantityPicker changes
  function handleQuantity(val) {
    setQuantity(val);
  }

  // Calculate the total cost based on selected quantity and unit price
  const total = (props.data.price * quantity).toFixed(2);
  function add() {
    const productToAdd = {
      ...props.data,
      quantity: quantity,
    };
    addToCart(productToAdd); // Send the product to cart context
  }

return (
  <div className="product-card">
    {/* Product Image */}
    <div className="image-wrapper">
      <img src={props.data.image} alt={props.data.title} />
    </div>
    {/* Product Title */}
    <h5>{props.data.title}</h5>

    {/* Pricing */}
    <div className="prices">
      <label className={`total ${quantity > 1 ? "highlight-total" : ""}`}>
        Total: ${total}
      </label>
      <label className="unit">Unit: ${props.data.price}</label>
    </div>

    {/* Quantity Controls with minus/plus */}
    <div className="quantity-controls">
      <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>

    {/* Wishlist + Add to Cart Icons */}
    <div className="product-actions">
      <button className="icon-button wishlist">
        <i className="bi bi-heart"></i>
      </button>
      <button className="icon-button add-to-cart" onClick={() => add()}>
        <i className="bi bi-bag"></i>
      </button>
    </div>
  </div>
);
}
// Notes:
// 1. The Product component is designed to display individual product details.
// 2. It includes an image, title, pricing, quantity controls, and action buttons.
// 3. The component uses React state to manage the quantity of the product.
// 4. It also uses the CartContext to add products to the cart. 

export default Product;