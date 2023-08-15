import React from 'react'
import Title from '../title/title'
import Products from '../products/Products'
import Footer_text from '../footer_text/Footer_text'
import Footer_logo from '../footer_logo/Footer_logo'
import styles from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={`${styles.container}`}>
   <Title/>
   <hr></hr>
    <Products/>
    <hr></hr>
    <Footer_text/>
    <Footer_logo/>
    </div>
  )
}

export default SideBar