import "../../styles/AdminForm.css"; // Import shared admin form styles (used across multiple admin components like ProductAdmin and Discounts)
import { useState } from "react";

// Discounts component handles discount code creation inside the Admin Dashboard
function Discounts() {
  const [coupon, setCoupon] = useState({
    code: "",
    category: "",
    discount: "",
    type: "Percentage",
  });

  const [success, setSuccess] = useState(false); // Track form submission success

  // Handle change in input fields
  function handleChange(e) {
    const { name, value } = e.target; // Extract the name and value of the input field that triggered the change event
    let updatedValue = value; // Default updated value is the current input value

    // Convert discount to a number so calculations can be done later
    if (name === "discount") {
      updatedValue = Number(value);
    }

    const copy = { ...coupon }; // Create a shallow copy of the existing coupon object
    copy[name] = updatedValue;  // Update the relevant field (based on 'name') with the new value
    setCoupon(copy); // Update the state with the new coupon object
  }

  // Save handler: logs the current discount form values to the console and sets success state to true
  function save() {
    if (!coupon.code || !coupon.category || !coupon.discount || !coupon.type) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Discount Saved:");
    console.log("Code:", coupon.code);
    console.log("Category:", coupon.category);
    console.log("Discount (%):", coupon.discount);
    console.log("Type:", coupon.type);

    setSuccess(true); // Set success state to true after saving
    setTimeout(() => setSuccess(false), 3000); // Auto-hide after 3 seconds
  }

  // Render discount form styled using shared admin styles (AdminForm.css)
  return (
    <div className="admin-card p-4 shadow-sm">
      <h4 className="text-center mb-3">Add a Discount Code</h4>

      {success && (
        <div className="alert alert-success text-center">
          Discount saved successfully!
        </div>
      )}

      {/*  Input field: Code */}
      <div className="form-group">
        <label>Code</label>
        <input 
          type="text" 
          name="code"
          className="form-control"
          value={coupon.code} 
          onChange={handleChange} 
        />
      </div>

      {/* Input field: Code Category */}
      <div className="form-group">
        <label>Code Category</label>
        <input 
          type="text" 
          name="category"
          className="form-control"
          value={coupon.category} 
          onChange={handleChange} 
        />
      </div>

      {/* Input field: Discount (%) */}
      <div className="form-group">
        <label>Discount (%)</label>
        <input 
          type="number" 
          name="discount"
          className="form-control"
          value={coupon.discount} 
          onChange={handleChange} 
        />
      </div>

      {/* Input field: Discount Type */}
      <div className="form-group">
        <label>Discount Type</label>
        <select 
          name="type"
          className="form-control"
          value={coupon.type} 
          onChange={handleChange}
        >
          <option value="Percentage">Percentage</option>
          <option value="Flat">Flat</option>
          <option value="Seasonal">Seasonal</option>
        </select>
      </div>

      {/* Submit button triggers the save function and uses shared 'save-btn' style */}
      <button className="btn save-btn w-100 mt-2" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Discounts;