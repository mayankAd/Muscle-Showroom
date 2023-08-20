import styles from './Navbar.module.css'

import React from 'react'

const Navbar = () => {
  return (
    <div className = {`${styles.container}`}>
        <a href="#"><button>SIGN UP</button></a>
    </div>
  )
}

export default Navbar