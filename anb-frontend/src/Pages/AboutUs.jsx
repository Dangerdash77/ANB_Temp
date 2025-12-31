import React, { useEffect, useState } from "react";
import "./Pages css/AboutUs.css";
import slider1 from '../assets/Banner 1.jpg';
import slider2 from '../assets/Banner 2.jpg';
import chainImg from "../assets/product_img/Arabian Mindi &  Endless Runner.svg";
import hardwareImg from "../assets/product_img/6 Gear Control.svg";
import precisionImg from "../assets/product_img/Zebra Metal.svg";

const AboutUs = () => {
  const heroImages = [
    slider1,
    slider2,
  ];

  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div
          className="about-hero-bg"
          style={{ backgroundImage: `url(${heroImages[currentHero]})` }}
        />
        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <p>
            <span className="highlight">ANB Industries</span> is a trusted
            manufacturer and supplier of curtain roller chains and related
            components, headquartered in Shapar-Veraval, Rajkot, Gujarat (India).
          </p>

          <p>
            With years of expertise and commitment to quality, we specialize in
            delivering precision-engineered products that meet the evolving
            needs of the interior and industrial hardware markets.
          </p>

          <p>
            Our company prides itself on being a <strong>Make in India</strong>{" "}
            initiative, offering products designed and manufactured with the
            highest standards of durability, reliability, and performance.
          </p>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="blue-panel">
        <h2 className="panel-title">
          Our Vision
          <span className="panel-underline"></span>
        </h2>
        <p>
          To become a global leader in the curtain roller chain industry by
          consistently providing innovative, reliable, and high-quality
          solutions that enhance both functionality and aesthetics.
        </p>
      </section>

      {/* ================= MISSION ================= */}
      <section className="blue-panel">
        <h2 className="panel-title">
          Our Mission
          <span className="panel-underline"></span>
        </h2>
        <ul className="check-list">
          <li>To deliver superior quality products that exceed customer expectations.</li>
          <li>To adopt sustainable manufacturing practices that reduce environmental impact.</li>
          <li>To build long-lasting partnerships with clients and stakeholders.</li>
          <li>To contribute to the growth of Indian manufacturing globally.</li>
        </ul>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="about-section">
        <h2 className="section-title">
          WHAT WE DO <span className="underline" />
        </h2>

        <p className="section-sub">
          At ANB Industries, we manufacture and supply:
        </p>

        <div className="what-grid">
          <div className="what-card">
            <div className="what-img">
              <img src={chainImg} alt="Curtain Roller Chains" />
            </div>
            <div className="what-content">
              <h3>Curtain Roller Chains</h3>
              <p>Strong, durable, and smooth in operation.</p>
            </div>
          </div>

          <div className="what-card">
            <div className="what-img">
              <img src={hardwareImg} alt="Custom Hardware Solutions" />
            </div>
            <div className="what-content">
              <h3>Curtain Roller Chains</h3>
              <p>Tailored to unique requirements.</p>
            </div>
          </div>

          <div className="what-card">
            <div className="what-img">
              <img src={precisionImg} alt="High Precision Components" />
            </div>
            <div className="what-content">
              <h3>Curtain Roller Chains</h3>
              <p>Designed for long life and reliability.</p>
            </div>
          </div>
        </div>

        <div className="usage-box">
          <p className="usage-title">Our products are widely used across:</p>
          <ul className="check-list">
            <li>Residential and commercial interiors.</li>
            <li>Industrial applications.</li>
            <li>OEM (Original Equipment Manufacturer) requirements.</li>
          </ul>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="values-grid">
        <div className="value-card">
          <h3>Why Choose Us?</h3>
          <ul>
            <li><strong>Quality First:</strong> Rigorous quality checks.</li>
            <li><strong>Innovation Driven:</strong> Continuous R&D.</li>
            <li><strong>Customer-Centric:</strong> Timely delivery & satisfaction.</li>
            <li><strong>Global Outlook:</strong> India to international markets.</li>
          </ul>
        </div>

        <div className="value-card">
          <h3>Our Values</h3>
          <ul>
            <li><strong>Integrity:</strong> Honest business practices.</li>
            <li><strong>Excellence:</strong> Striving for perfection.</li>
            <li><strong>Innovation:</strong> Forward-thinking mindset.</li>
            <li><strong>Sustainability:</strong> Responsible manufacturing.</li>
          </ul>
        </div>
      </section>

      {/* ================= PRESENCE ================= */}
      <section className="about-section">
        <h2 className="section-title">
          OUR PRESENCE <span className="underline" />
        </h2>

        <p className="presence-text">
          Based in Rajkot, Gujarat, ANB Industries is strategically located in
          India’s industrial hub, giving us access to modern infrastructure,
          skilled workforce, and strong logistics networks. We proudly serve
          customers across India and are expanding our reach globally.
        </p>
      </section>

    </div>
  );
};

export default AboutUs;
