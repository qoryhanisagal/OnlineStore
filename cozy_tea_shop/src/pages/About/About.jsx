// About.jsx - Page that introduces the developer. Includes a name, email, and an interactive button for demo purposes.
import React, {useState} from "react";
import "./About.css";

function About() {
  // State to toggle visibility or future interactivity (not currently used)
  const [isVisible, setIsVisible] = React.useState(false);

  // This function logs a greeting message to the console when the button is clicked
  function showData() {
    console.log("Hello! This is Koiree's About page for Cozy Tea Shop.");
  }

  // Render the About page layout with name, email, and a themed button
  return (
    <div className="about-page">
      {/* Display my name */}
      <h2>Sequoyah Descoteaux</h2>
      {/* Display my email */}
      <h5>sequoyah.m.dozier@gmail.com</h5>
      {/* Button to trigger showData and simulate interaction */}
      <button className="about-button" onClick={showData}>
        Learn More About Me
      </button>
    </div>
  );
}

export default About;