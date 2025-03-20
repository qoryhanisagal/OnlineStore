// Admin panel that allows administrators to input and save new product data.
import { useState } from "react";
import "../../styles/AdminForm.css";

// Track input value for Title
const [title, setTitle] = useState("");

// Track input value for Price
const [price, setPrice] = useState("");

// Track input value for Image URL
const [image, setImage] = useState("");

// Track input value for Category
const [category, setCategory] = useState("");

// Handles form submission by logging the product details to the console
function save() {
  console.log("Saving product:");
  console.log("Title:", title);
  console.log("Price:", price);
  console.log("Image URL:", image);
  console.log("Category:", category);
}

function ProductAdmin() {
  // Render the admin product form with shared styles
  return (
    <div className="admin-card p-4 shadow-sm">
        <h4 className="text-center mb-3">Add a New Product</h4>

        {/* Field for entering the product Title */}
        <div className="form-group mb-3">
        <label>Title</label>
        <input 
            type="text" 
            className="form-control" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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