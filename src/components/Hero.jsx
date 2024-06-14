import React from "react";
import amazonicon from "../../public/images/amazon.svg"
import flipcart from "../../public/images/flipkart.svg"
import shoe_image from "../../public/images/shoe_image.svg"
import "../App.css"

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
        <p>Also available on</p>
        <div className="brand-icons">
            <img src={amazonicon}></img>
            <img src={flipcart}></img>
        </div>
        </div>
      </div>
      <div className="hero-image">
      <img src={shoe_image}></img>
      </div>
    </main>
  );
};

export default HeroSection;
