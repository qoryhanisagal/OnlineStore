import "../../styles/AdminForm.css"; // Import shared admin form styles (used across multiple admin components like ProductAdmin and Discounts)
import { useState } from "react";

// Discounts component handles discount code creation inside the Admin Dashboard
function Discounts() {
  // Track input state for each field in the discount form
  const [code, setCode] = useState("");
  // Track input state for each field in the discount form
  const [category, setCategory] = useState("");
  // Track input state for each field in the discount form
  const [discount, setDiscount] = useState("");
  // Track input state for each field in the discount form
  const [type, setType] = useState("Percentage");

  // Save handler: logs the current discount form values to the console (used as placeholder for now)
  function save() {
    console.log("Discount Saved:");
    console.log("Code:", code);
    console.log("Category:", category);
    console.log("Discount (%):", discount);
    console.log("Type:", type);
  }

  // Render discount form styled using shared admin styles (AdminForm.css)
  return (
    <div className="admin-card p-4 shadow-sm">
      <h4 className="text-center mb-3">Add a Discount Code</h4>

      // Input field: Code
      <div className="form-group">
        <label>Code</label>
        <input 
          type="text" 
          className="form-control"
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
        />
      </div>

      // Input field: Code Category
      <div className="form-group">
        <label>Code Category</label>
        <input 
          type="text" 
          className="form-control"
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
        />
      </div>

      // Input field: Discount (%)
      <div className="form-group">
        <label>Discount (%)</label>
        <input 
          type="number" 
          className="form-control"
          value={discount} 
          onChange={(e) => setDiscount(e.target.value)} 
        />
      </div>

      // Input field: Discount Type
      <div className="form-group">
        <label>Discount Type</label>
        <select 
          className="form-control"
          value={type} 
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Percentage">Percentage</option>
          <option value="Flat">Flat</option>
          <option value="Seasonal">Seasonal</option>
        </select>
      </div>

      // Submit button triggers the save function and uses shared 'save-btn' style
      <button className="btn save-btn w-100 mt-2" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Discounts;