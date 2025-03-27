// About.jsx - Page that introduces the developer and shares Cozy Tea Shop's brand story
import React, { useState } from "react";
import "./About.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  function showData() {
    console.log("Hello! This is Koiree's About page for Cozy Tea Shop.");
  }

  return (
    <div className="about-page">
      {/* Developer Info Section */}
      <h2>Sequoyah Descoteaux</h2>
      <h5>sequoyah.m.dozier@gmail.com</h5>
      <button className="about-button" onClick={showData}>
        Learn More About Me
      </button>

      {/* Hero Section */}
      <div className="about-hero">
        <img src="/img/about-hero.jpg" alt="Cozy Tea Experience" />
        <div className="hero-text">
          <h1>Our Story</h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="about-intro">
        <h2>Welcome to Cozy Tea Shop</h2>
        <p>
          We believe in crafting teas that warm the soul and spark connection. Every blend is created with intention — for flavor, wellness, and ritual.
        </p>
      </section>

      {/* Image + Text Blocks */}
      <section className="about-section reverse">
        <div className="about-image">
          <img src="/img/leaf-tea.jpg" alt="Loose leaf tea" />
        </div>
        <div className="about-text">
          <h3>From Leaf to Cup</h3>
          <p>
            We source our teas from ethical farms around the world, hand-selecting each leaf for freshness and flavor.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-text">
          <h3>Mindful Moments</h3>
          <p>
            Our mission is to help you slow down and savor life’s little rituals — one sip at a time.
          </p>
        </div>
        <div className="about-image">
          <img src="/img/tea-moment.jpg" alt="Mindful tea moment" />
        </div>
      </section>
    </div>
  );
}

export default About;