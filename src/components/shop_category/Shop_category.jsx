import Category_box from '../category_box/Category_box'
import styles from './Shop_category.module.css'

import React from 'react'

const Shop_category = () => {
  return (
    <div className={`${styles.container}`}>
        <h1>Shop by category</h1>
        <div className={`${styles.categories}`}>
            
    <Category_box image ={"images/men.jpg"} text={"MEN"}/>
    <Category_box image ={"images/women2.jpg"} text={"WOMEN"}/>
    <Category_box image ={"images/clothing.jpg"} text={"CLOTHING"}/>
    <Category_box image ={"images/supplements.jpg"} text={"SUPPLEMENTS"}/>
    <Category_box image ={"images/equipments.jpg"} text={"EQUIPMENTS"}/>
    <Category_box image ={"images/men.jpg"} text={"MEN"}/>
        </div>
    </div>
  )
}

export default Shop_category