import React from "react";
import styles from "./Footer_text.module.css";

const Footer_text = () => {
  return (
    <div>
      <div className={`${styles.container}`}>
        <a href="#">About Us</a>
        <a href="#">Visit Us</a>
        <a href="#">Blog</a>
        <a href="#">Shipping & Privacy</a>
      </div>
    </div>
  );
};

export default Footer_text;
