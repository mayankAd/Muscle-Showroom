import React from "react";
import styles from "./Box_slide_items.module.css";
import Navbar from "../navbar/Navbar";

const Box_slide_items = () => {
  return (
    <div className={`${styles.main}`}>
      <video autoPlay muted loop id="myVideo">
        <source src="public/background_video.mp4" type="video/mp4" />
      </video>

      <div className={`${styles.container}`}>
        
        <h1>ORIGINAL SUPPLEMENTS</h1>
        <p>Buy your essential supplements from certified brands</p>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Box_slide_items;
