import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that enables buying and
          selling products and services. It offers features like product
          browsing, secure payment options, and user reviews. With mobile
          optimization and data analytics, these sites enhance customer
          engagement and streamline transactions, making them essential for
          modern retail success.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
