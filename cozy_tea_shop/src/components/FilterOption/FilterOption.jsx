import "./FilterOption.css";

// This FilterOption is a reusable button component for each filter (like "All", "Green", etc.)
// It accepts 3 props: label (the text), onClick (the function), and isActive (to style the selected one)
function FilterOption({ label, onClick, isActive }) {
  return (
    <button
      className={`filter-option ${isActive ? "active" : ""}`} // If this is the selected filter, add the 'active' class
      onClick={() => onClick(label)} // When I click the button, I send the label back to the parent (TeaFilter)
    >
      {label} {/* Display the label text inside the button */}
    </button>
  );
}

export default FilterOption;