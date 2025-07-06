import React, { useState, useRef, useEffect } from "react";
import "./Pages css/Products.css";
import cartIcon from "../assets/cart.png";

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

const localProducts = [
  {
    _id: "local-1",
    name: "Plastic Endless Chain",
    color: "white/brown/gray/cream/black",
    size: "0.5/0.75/1/1.2/1.5/2/2.5/3/4/5, customized size",
    material: "POM",
    stdPacking: "500piece/box",
    minQty: "500piece",
    image: img1,
  },
  {
    _id: "local-2-white",
    name: "Plastic Operation Chain",
    color: "white",
    size: "200meter/roll",
    material: "POM",
    stdPacking: "10 roll/box",
    minQty: "10roll",
    image: img2,
  },
  {
    _id: "local-2-brown",
    name: "Plastic Operation Chain",
    color: "brown",
    size: "200meter/roll",
    material: "POM",
    stdPacking: "10 roll/box",
    minQty: "10roll",
    image: img3,
  },
  {
    _id: "local-2-gray",
    name: "Plastic Operation Chain",
    color: "gray",
    size: "200meter/roll",
    material: "POM",
    stdPacking: "10 roll/box",
    minQty: "10roll",
    image: img4,
  },
  {
    _id: "local-2-black",
    name: "Plastic Operation Chain",
    color: "black",
    size: "200meter/roll",
    material: "POM",
    stdPacking: "10 roll/box",
    minQty: "10roll",
    image: img5,
  },
  {
    _id: "local-3",
    name: "6-Gear Roller Control Unit",
    color: "white/brown/gray/cream/black",
    size: "38mm",
    material: "POM",
    stdPacking: "100set/box",
    minQty: "100set",
    image: img6,
  },
  {
    _id: "local-4a",
    name: "Zebra Control Unit (Metal End Cap)",
    color: "white",
    size: "38mm",
    material: "POM",
    stdPacking: "100set/box",
    minQty: "100set",
    image: img7,
  },
  {
    _id: "local-4b",
    name: "Zebra Control Unit (Plastic End Cap)",
    color: "white",
    size: "38mm",
    material: "POM",
    stdPacking: "100set/box",
    minQty: "100set",
    image: img8,
  },
  // {
  //   _id: "local-5",
  //   name: "Heavy Cord Weight (Plain)",
  //   color: "transparent",
  //   stdPacking: "500piece/box",
  //   minQty: "500piece",
  //   image: img9,
  // },
  {
    _id: "local-6",
    name: "Heavy Cord Weight (Printed)",
    color: "transparent",
    stdPacking: "500piece/box",
    minQty: "2000piece",
    image: img10,
  },
  {
    _id: "local-7",
    name: "Oval Cord Weight (Plain)",
    color: "white/brown",
    stdPacking: "1000piece/box",
    minQty: "1000piece",
    image: img11,
  },
  // {
  //   _id: "local-8",
  //   name: "Oval Cord Weight (Printed)",
  //   color: "white/brown",
  //   stdPacking: "1000piece/box",
  //   minQty: "2000piece",
  //   image: img12,
  // },
  {
    _id: "local-9",
    name: "Arabian Mindi Runner",
    color: "white/black",
    size: "Distance: 60mm",
    material: "POM",
    stdPacking: "1660piece (100meter)/roll, 10roll/box",
    minQty: "10roll",
    image: img13,
  },
  {
    _id: "local-10",
    name: "Arabian Trishul Runner",
    color: "white/black",
    size: "Distance: 60mm",
    material: "POM",
    stdPacking: "1660piece (100meter)/roll, 10roll/box",
    minQty: "10roll",
    image: img14,
  },
  // {
  //   _id: "local-11",
  //   name: "M Runner Ripple",
  //   color: "white",
  //   size: "Distance: 60mm",
  //   material: "POM",
  //   stdPacking: "500piece/roll (10Roll/box)",
  //   minQty: "500piece",
  //   image: img15,
  // },
  {
    _id: "local-12",
    name: "M Runner",
    color: "white",
    material: "POM",
    stdPacking: "10000piece/box",
    minQty: "10000piece",
    image: img16,
  },
  {
    _id: "local-13",
    name: "Roman Control Set",
    color: "white",
    material: "POM",
    stdPacking: "100piece/box",
    minQty: "100piece",
    image: img17,
  },
  {
    _id: "local-14",
    name: "Bottom Chain",
    color: "white",
    size: "200meter/roll",
    material: "POM",
    stdPacking: "10/box",
    minQty: "10piece",
    image: img18,
  },
  // {
  //   _id: "local-15",
  //   name: "Plastic Held",
  //   color: "orange",
  //   material: "POM",
  //   stdPacking: "20000piece/box",
  //   minQty: "20000piece",
  //   image: img19,
  // },
  // {
  //   _id: "local-16",
  //   name: "Plastic Lotion Pump",
  //   color: "white/black",
  //   size: "28mm",
  //   material: "Plastic",
  //   stdPacking: "1000piece/box",
  //   minQty: "2000piece",
  //   image: img20,
  // },
  // {
  //   _id: "local-17",
  //   name: "Soap Dispenser Pump",
  //   color: "white",
  //   material: "Plastic",
  //   stdPacking: "2000piece/bag",
  //   minQty: "2000piece",
  //   image: img21,
  // },
  {
    _id: "local-18a",
    name: "Chain Stopper Button",
    color: "white",
    material: "Plastic",
    stdPacking: "1000piece/bag",
    minQty: "2000piece",
    image: img22,
  },
  {
    _id: "local-18b",
    name: "Chain Stopper Button",
    color: "transparent",
    material: "Plastic",
    stdPacking: "1000piece/bag",
    minQty: "2000piece",
    image: img23,
  },
  {
    _id: "local-19",
    name: "Chain Stopper Ball",
    color: "transparent",
    material: "PC",
    stdPacking: "1000piece/bag",
    minQty: "2000piece",
    image: img24,
  },
  {
    _id: "local-20",
    name: "Chain Jointer",
    color: "white",
    material: "Plastic",
    stdPacking: "1000set/bag",
    minQty: "2000set",
    image: img25,
  },
];


const ProductPage = () => {
  const [localOnlyProducts, setLocalOnlyProducts] = useState([]);
  const [backendOnlyProducts, setBackendOnlyProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [formType, setFormType] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    company: "",
  });
  const [loading, setLoading] = useState(false);

  const cartRef = useRef(null);

  const scrollToCart = () => {
    cartRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const isInCart = (id) => cart.some((p) => p._id === id);

  const toggleCart = (product) => {
    setCart((prev) =>
      isInCart(product._id)
        ? prev.filter((p) => p._id !== product._id)
        : [
          ...prev,
          {
            ...product,
            quantity: parseInt((product.minQty || "1").replace(/\D/g, "")) || 1,
          },
        ]
    );
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleQuantityChange = (id, val) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id
          ? {
            ...item,
            quantity: Math.max(Number(val), Number(item.minQty || 1)),
          }
          : item
      )
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      type: formType,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      address:
        formType === "Sample" || formType === "Order" ? formData.address : "",
      items: cart.map((p) => ({
        name: p.name,
        quantity: formType === "Sample" ? 1 : p.quantity,
      })),
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_ORIGIN}/api/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        alert(`✅ ${formType} request sent successfully!`);
        setCart([]);
        setFormType(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          company: "",
        });
      } else {
        alert("❌ Failed to send mail. Please try again.");
      }
    } catch (err) {
      console.error("Error sending request:", err);
      alert("🚫 Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_ORIGIN}/api/products/all`);
        const data = await res.json();
        const backendProducts = data.products || [];

        setLocalOnlyProducts(localProducts);
        setBackendOnlyProducts(backendProducts);
        // Merge backend and hardcoded products
        setProducts([...localProducts, ...backendProducts]);
      } catch (err) {
        console.error("❌ Failed to load backend products:", err);
        setLocalOnlyProducts(localProducts); // fallback to only local
        setBackendOnlyProducts([]); // no backend products if failed
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="product-page">
      <div className="cart-button" onClick={scrollToCart}>
        <img src={cartIcon} alt="Cart" />
        <span className="cart-count">{cart.length}</span>
      </div>

      {localOnlyProducts.length > 0 && (
        <>
          <h2 className="section-title">🔧 Our Standard Products</h2>
          <div className="product-grid">
            {localOnlyProducts.map((p) => (
              <div key={p._id} className="product-vertical-card">
                <img src={p.image} alt={p.name} />
                <div className="product-details">
                  <h3>{p.name}</h3>
                  {["size", "color", "material", "stdPacking"].map((key) =>
                    p[key] ? (
                      <p key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {p[key]}
                      </p>
                    ) : null
                  )}
                  <button onClick={() => toggleCart(p)} className="add-cart">
                    {isInCart(p._id) ? "−" : "+"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {backendOnlyProducts.length > 0 && (
        <>
          <h2 className="section-title">🚀 Special or Custom Products</h2>
          <div className="product-grid">
            {backendOnlyProducts.map((p) => (
              <div key={p._id} className="product-vertical-card">
                <img src={p.image} alt={p.name} />
                <div className="product-details">
                  <h3>{p.name}</h3>
                  {["size", "color", "material", "stdPacking"].map((key) =>
                    p[key] ? (
                      <p key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {p[key]}
                      </p>
                    ) : null
                  )}
                  <button onClick={() => toggleCart(p)} className="add-cart">
                    {isInCart(p._id) ? "−" : "+"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}


      <div className="cart-panel" ref={cartRef}>
        <h2>Cart Summary</h2>
        {cart.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          <div className="cart-preview-list">
            {cart.map((item) => (
              <div key={item._id} className="cart-preview-card">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        )}
        <div className="cart-actions">
          <button onClick={() => setFormType("Quote")}>Get a Quote</button>
          <button onClick={() => setFormType("Sample")}>Request Sample</button>
          <button onClick={() => setFormType("Order")}>Place Order</button>
        </div>

        {formType && (
          <div className="form-overlay">
            <div className="form-container">
              <h2>{formType} Form</h2>
              {cart.length === 0 ? (
                <>
                  <p className="warning-text">Please add products before submitting.</p>
                  <div className="form-actions">
                    <button onClick={() => setFormType(null)}>Close</button>
                  </div>
                </>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <label>
                    Name:
                    <input name="name" value={formData.name} onChange={handleChange} required />
                  </label>
                  <label>
                    Mobile Number:
                    <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </label>
                  <label>
                    Email:
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </label>
                  <label>
                    Company:
                    <input name="company" value={formData.company} onChange={handleChange} />
                  </label>

                  {(formType === "Sample" || formType === "Order") && (
                    <label>
                      Address:
                      <textarea name="address" value={formData.address} onChange={handleChange} required />
                    </label>
                  )}

                  <div className="product-summary-scroll">
                    <div className="product-summary">
                      {cart.map((product) => {
                        const minQty = parseInt((product.minQty || "1").replace(/\D/g, "")) || 1;
                        return (
                          <div key={product._id} className="product-summary-item">
                            <span>{product.name}</span>
                            {formType === "Sample" ? (
                              <span>Quantity: 1</span>
                            ) : (
                              <div className="quantity-with-unit">
                                <input
                                  type="number"
                                  min={minQty}
                                  value={product.quantity}
                                  onChange={(e) => handleQuantityChange(product._id, e.target.value)}
                                />
                                <span className="unit-text">pcs</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" disabled={loading}>
                      Submit
                    </button>
                    <button type="button" onClick={() => setFormType(null)}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
