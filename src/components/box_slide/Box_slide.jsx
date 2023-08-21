import React from 'react'
import styles from './Box_slide.module.css'
import Box_slide_items from '../box_slide_items/Box_slide_items'
import Navbar from '../navbar/Navbar'



const Box_slide = () => {
  return (
    <div className={`${styles.container}`}>
        <Box_slide_items />
    </div>
  )
}

export default Box_slide