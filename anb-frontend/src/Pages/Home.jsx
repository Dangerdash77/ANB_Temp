import React, { useEffect, useState } from 'react';
import './Pages css/Home.css';
import slider1 from '../assets/Banner 1.jpg';
import slider2 from '../assets/Banner 2.jpg';
// import slider3 from '../assets/Banner 3.jpg';
import trust1 from '../assets/Company_Logo/DDecor.svg';
import trust2 from '../assets/Company_Logo/Marvel.svg';
import trust3 from '../assets/Company_Logo/Wintree.svg';
import trust4 from '../assets/Company_Logo/sipko.svg';
import trust5 from '../assets/Company_Logo/adorn.svg';
import trust6 from '../assets/Company_Logo/TBF.svg';
import trust7 from '../assets/Company_Logo/Viento.svg';
import trust8 from '../assets/Company_Logo/ID.svg';
import arrowLeft from '../assets/Arrow Left.svg';
import arrowRight from '../assets/Arrow Right.svg';
import blueshape from '../assets/blueshape.svg';
import lion from '../assets/Lion.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/product_img/Plastic Endless chain.png';
import img2 from '../assets/product_img/Plastic Operation Chain W.jpg';
import img3 from '../assets/product_img/Plastic Operation Chain Brown.jpg';
import img4 from '../assets/product_img/Plastic Operation Chain S.jpg';
import img5 from '../assets/product_img/Plastic Operation Chain B.jpg';
import img6 from '../assets/product_img/6 Gear Control.png';
import img7 from '../assets/product_img/Zebra Metal.png';
import img8 from '../assets/product_img/Zebra Plastic.png';
// import img9 from '../assets/product_img/Heavy Cord Weight Plain.png';
import img10 from '../assets/product_img/Heavy Cord Weight Printed.png';
import img11 from '../assets/product_img/Oval Cord Weight Plain.png';
// import img12 from '../assets/product_img/Oval Cord Weight Printed.png';
import img13 from '../assets/product_img/Arabian Mindi Runner.png';
import img14 from '../assets/product_img/Arabian Trishul Runner.png';
// import img15 from '../assets/product_img/M Runner Ripple.png';
import img16 from '../assets/product_img/M Runner.png';
import img17 from '../assets/product_img/Roman Control Set.png';
import img18 from '../assets/product_img/Bottom Chain.png';
// import img19 from '../assets/product_img/Plastic Held.png';
// import img20 from '../assets/product_img/Plastic Lotion Pump.png';
// import img21 from '../assets/product_img/Soap Dispenser Pump.png';
import img22 from '../assets/product_img/Chain Stopper Button.png';
import img23 from '../assets/product_img/Chain Stopper Button Trans.png';
import img24 from '../assets/product_img/Chain Stopper Ball.png';
import img25 from '../assets/product_img/Chain Jointer.png';

const images = [slider1, slider2];

const productData = [
  { image: img1, title: 'Plastic Operation Chain', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img2, title: 'Plastic Operation Chain', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img3, title: 'Plastic Operation Chain', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img4, title: 'Plastic Operation Chain', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img5, title: 'Plastic Operation Chain', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img6, title: '6-Gear Roller Control Unit', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img7, title: 'Zebra Control Unit (Metal end caps)', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img8, title: 'Zebra Control Unit (Plastic end caps)', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img10, title: 'Heavy Cord Weight (Printed)', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img11, title: 'Oval Cord Weight (Plain)', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img13, title: 'Arabian Mindi Runner', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img14, title: 'Arabian Trishul Runner', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img16, title: 'M Runner', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img17, title: 'Roman Control Set', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img18, title: 'Bottom Chain', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img22, title: 'Chain Stopper Button', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img23, title: 'Chain Stopper Button Transparent', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img24, title: 'Chain Stopper Ball', description: 'High-durability chain designed for smooth curtain operations in all conditions.' },
  { image: img25, title: 'Chain Jointer', description: 'High-durability chain designed for smooth curtain operations in all conditions.' }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex(prev => (prev + 1) % productData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        {/* Background slider image */}
        <img src={images[currentSlide]} alt="" className="hero-bg" />

        {/* BLUE SHAPE IMAGE */}
        <img
          src={blueshape}
          alt=""
          className="hero-blue-shape"
        />

        {/* CONTENT ON TOP OF SHAPE */}
        <div className="hero-content">
          <h1>
            Welcome to <br />
            ANB Industries
          </h1>

          <p>
            At ANB Industries, we specialize in manufacturing high-quality curtain
            roller chains, offering exceptional durability, precision, and design
            to meet global industrial standards.
          </p>

          <p>
            Our commitment to excellence and decades of experience have made us a
            trusted name among top manufacturing firms and interior solutions providers.
          </p>
        </div>

        {/* LION LOGO */}
        <img
          src={lion}
          alt="Make in India"
          className="hero-lion"
        />

      </section>

      {/* ABOUT */}
      <section className="about">
        <h2 className="section-title">
          ABOUT US
          <span className="orange-underline"></span>
        </h2>
        <p>
          Established in 2021, ANB Industries is a proudly Made in India company based in Shapar-Veraval,
          Rajkot, Gujarat, specializing in curtain roller chains and accessories. As one of the first in
          India to focus exclusively on this niche, we’re committed to delivering durable, high-quality
          products crafted under the Make in India initiative.
        </p>
        <p>
          Our vision is to be India’s most trusted name in curtain solutions, driven by innovation, reliability,
          and customer satisfaction. We aim to grow sustainably while showcasing Indian manufacturing excellence
          on a global platform.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2 className="section-title">
          PRODUCTS
          <span className="orange-underline"></span>
        </h2>
        <div className="products-card">
          <p className="products-text">
            At ANB Industries, we offer a wide range of high-quality curtain roller chains and components,
            serving industries across India and beyond with innovation, reliability, and precision.
          </p>

          <div className="products-slider">
            {/* LEFT ARROW */}
            <button
              className="product-arrow left"
              onClick={() =>
                setCurrentProductIndex(
                  (prev) => (prev - 1 + productData.length) % productData.length
                )
              }
            >
              <img src={arrowLeft} alt="Previous" />
            </button>

            {/* LEFT SIDE CARD */}
            <div className="side">
              <img
                src={
                  productData[
                    (currentProductIndex - 1 + productData.length) %
                    productData.length
                  ].image
                }
                alt=""
              />
            </div>

            {/* CENTER CARD */}
            <div className="center">
              <img src={productData[currentProductIndex].image} alt="" />
              <h3>{productData[currentProductIndex].title}</h3>
              <p>{productData[currentProductIndex].description}</p>
            </div>

            {/* RIGHT SIDE CARD */}
            <div className="side">
              <img
                src={
                  productData[(currentProductIndex + 1) % productData.length].image
                }
                alt=""
              />
            </div>

            {/* RIGHT ARROW */}
            <button
              className="product-arrow right"
              onClick={() =>
                setCurrentProductIndex(
                  (prev) => (prev + 1) % productData.length
                )
              }
            >
              <img src={arrowRight} alt="Next" />
            </button>
          </div>

          <button className="view-all-btn" onClick={() => navigate('/products')}>View All Products</button>
        </div>

      </section>

      {/* TRUSTED */}
      <section className="trusted">
        <h2 className="section-title">
          Trusted by Leading Companies
          <span className="orange-underline"></span>
        </h2>

        <p>Our products are relied upon by industry leaders for performance, reliability, and precision.</p>

        <div className="trusted-grid">
          <img src={trust1} alt="" />
          <img src={trust2} alt="" />
          <img src={trust3} alt="" />
          <img src={trust4} alt="" />
          <img src={trust5} alt="" />
          <img src={trust6} alt="" />
          <img src={trust7} alt="" />
          <img src={trust8} alt="" />
        </div>
      </section>

    </div>
  );
};

export default Home;
