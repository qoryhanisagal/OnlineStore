import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import "./Profile.css"; // Create this CSS for Profile

function Profile() {
  const { user, updateUser } = useContext(UserContext);

  // Local state to handle form changes
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
  });

  // Handle input changes dynamically
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Save updated info to UserContext
  function saveProfile() {
    updateUser(formData);
    alert("Profile updated successfully!"); // Confirmation message
  }

  return (
    <div className="profile-container">
      <h2>Update Your Profile</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <button className="save-btn" onClick={saveProfile}>
        Save Profile
      </button>
    </div>
  );
}

export default Profile;