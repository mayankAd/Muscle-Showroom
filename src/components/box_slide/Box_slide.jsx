import React from 'react'
import styles from './Box_slide.module.css'
import Box_slide_items from '../box_slide_items/Box_slide_items'



const Box_slide = () => {
  return (
    <div className={`${styles.container}`}>
        <Box_slide_items style = {{zIndex:'999'}}/>
    </div>
  )
}

export default Box_slide