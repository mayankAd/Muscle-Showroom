import styles from './Shop_category.module.css'

import React from 'react'

const Shop_category = () => {
  return (
    <div className={`${styles.container}`}>
        <h1>Shop by category</h1>
        <div className={`${styles.categories}`}>
            <div className={`${styles.image_container}`}>
                <img src="" alt="" />
            </div>
            <div className={`${styles.image_container}`}>
                <img src="" alt="" />
            </div>
            <div className={`${styles.image_container}`}>
                <img src="" alt="" />
            </div>
            <div className={`${styles.image_container}`}>
                <img src="" alt="" />
            </div>
            <div className={`${styles.image_container}`}>
                <img src="" alt="" />
            </div>
            <div className={`${styles.image_container}`}>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Shop_category