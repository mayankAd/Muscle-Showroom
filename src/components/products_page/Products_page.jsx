import React from 'react'
import styles from './Products_page.module.css'
import Product_box from '../product_box/Product_box'

const Products_page = () => {
  return (
    <div className={`${styles.container}`}>
        <h1 >Products</h1>
        <div className={`${styles.products}`}>
            <Product_box/>
            <Product_box/>
            <Product_box/>
            <Product_box/>
            <Product_box/>
            <Product_box/>
            <Product_box/>
        </div>
        <p><br /><br /><br />work in progress....</p>
        
    </div>
  )
}

export default Products_page