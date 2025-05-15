import { useState } from "react";
import "../../styles/AdminForm.css";
import DataService from "../../services/DataService";

function ProductAdmin() {

// Track input value for Title
const [product, setProduct] = useState("");

// Track input value for Price
const [price, setPrice] = useState("");

// Track input value for Image URL
const [image, setImage] = useState("");

// Track input value for Category
const [category, setCategory] = useState("");


function handleChange(event) {
    // Update the state with the new value from the input field
    setProduct(event.target.value);
}
// Update the state with the new value from the input field
function handlePriceChange(event) {
    setPrice(event.target.value);
}
// Update the state with the new value from the input field
function handleImageChange(event) {
    setImage(event.target.value);
}
// Update the state with the new value from the input field
function handleCategoryChange(event) {
    setCategory(event.target.value);
}
// Function to handle form submission
// This function is called when the user clicks the "Save" button
// It currently logs the product details to the console
// In a real application, you would typically send this data to a server
// or perform some other action with it

// Handles form submission by logging the product details to the console
async function save() {
  const parsedPrice = parseFloat(price); // Convert price string to number
  const productObj = {
    title: product,
    price: parsedPrice,
    image: image,
    category: category,
  };

  try {
    const response = await DataService.saveProduct(productObj);
    console.log("✅ Product saved:", response);
  } catch (err) {
    console.error("❌ Error saving product:", err);
  }
}

// Optional utility: returns a shallow copy of the product state as an object
function getProductCopy() {
  return {
    title: product,
    price: parseFloat(price),
    image: image,
    category: category,
  };
}

  // Render the admin product form with shared styles
  return (
    <div className="admin-card p-4 shadow-sm">
        <h4 className="text-center mb-3">Add a New Product</h4>

        {/* Field for entering the product Title */}
        <div className="form-group mb-3">
        <label>Product Name</label>
        <input 
            type="text" 
            className="form-control" 
            value={product}
            onChange={(e) => setProduct(e.target.value)}
        />
        </div>

        {/* Field for entering the product Price */}
        <div className="form-group mb-3">
        <label>Price</label>
        <input 
            type="number" 
            className="form-control" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
        />
        </div>

        {/* Field for entering the product Image URL */}
        <div className="form-group mb-3">
        <label>Image URL</label>
        <input 
            type="text" 
            className="form-control" 
            value={image}
            onChange={(e) => setImage(e.target.value)}
        />
        </div>

        {/* Field for entering the product Category */}
        <div className="form-group mb-3">
        <label>Category</label>
        <input 
            type="text" 
            className="form-control" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        />
        </div>

        {/* Submit button to save the product data */}
        <button className="btn save-btn w-100 mt-2" onClick={save}>
        Save
        </button>
    </div>
  );
}

export default ProductAdmin;