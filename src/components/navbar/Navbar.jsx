import styles from './Navbar.module.css'
import Cart from '../cart/Cart'

import React from 'react'

const Navbar = () => {
  return (
    
    <div className = {`${styles.container}`}>
        <a href="#"><button>SIGN UP</button></a>
        <Cart/>
    </div>
    
    
  )
}

export default Navbar