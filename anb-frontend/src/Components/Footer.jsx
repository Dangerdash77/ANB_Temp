import React from 'react';
import './Components css/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/ANB_Logo.svg'; // ✅ IMPORT LOGO

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Column 1 - Brand */}
        <div className="footer-column footer-brand">
          <img src={logo} alt="ANB Industries" className="footer-logo" />

          <h3>ANB Industries</h3>
          <p>
            We specialize in high-quality curtain roller chains,
            engineered with precision and trusted nationwide.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-column links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="footer-column contact">
          <h4>Get In Touch</h4>
          <p>📍 Shapar-Veraval, Rajkot, Gujarat, India</p>
          <p>
            ✉️ <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=anbind2020@gmail.com&su=Inquiry from Website"
  target="_blank"
  rel="noopener noreferrer"
>
  anbind2020@gmail.com
</a>

          </p>
          <p>
            📞 <a href="tel:+918460603033">+91 84606 03033</a>
          </p>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <p>© {new Date().getFullYear()} ANB Industries. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
