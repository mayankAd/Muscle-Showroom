import React from 'react'
import styles from './Category_box.module.css'

const Category_box = (props) => {
  return (
    
        <div className={`${styles.image_container}`}>
                <img src={props.image} alt="" />
                <h2>{props.text}</h2>
            </div>
    
  )
}

export default Category_box