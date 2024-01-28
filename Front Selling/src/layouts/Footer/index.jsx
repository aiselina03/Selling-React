import React from "react";
import "./style.scss";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
      <div className="foot1">
        <div className="about">
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit <br />amet consectetur <br />adipisicing elit. Neque <br />
            facere laudantium magnam voluptatum <br /> autem. Amet aliquid nesciunt <br />
            veritatis aliquam.
          </p>
        </div>
        <div className="link">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="follow">
          <h3>FOLLOW US</h3>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
        <div className="product">
          <h3>FEATURED PRODUCT</h3>
          <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
          <p>Leather Brown Shoe</p>
          <p>$60.00</p>
          <button>ADD TO CART</button>
        </div>
      </div>
      <div className="foot2">
        <p>
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </p>
      </div>
    </div>
    </div>
    
  );
}

export default Footer;
