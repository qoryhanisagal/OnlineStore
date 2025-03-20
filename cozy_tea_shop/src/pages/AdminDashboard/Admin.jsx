// Admin.jsx - Main Admin Dashboard page that renders product and discount form components
// Uses flexbox layout to organize sections side by side

// Importing admin components
import ProductAdmin from "../../components/ProductAdmin/ProductAdmin";
import Discounts from "../../components/Discounts/Discounts";
// Page-specific layout styles
import "./Admin.css";
// Shared styles for admin form cards and fields
import "../../styles/AdminForm.css";

function Admin() {
  // Render Admin Dashboard layout with left and right form sections
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="admin-sections">
        <div className="admin-left">
          {/* Left section: Product admin form */}
          <ProductAdmin />
        </div>

        <div className="admin-right">
          {/* Right section: Discounts form */}
          <Discounts />
        </div>
      </div>
    </div>
  );
}

export default Admin;