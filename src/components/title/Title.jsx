import React from 'react'
import styles from './Title.module.css'

const Title = () => {
  return (
    <div className={`${styles.container}`}>
    <div className={`${styles.image}`}><img src="images/pngegg.png" alt="" /></div>
    
    <div className={`${styles.logo_name}`}>
        <a href='#'><p>Muscle</p> Showroom</a>
    </div>
    </div>
  )
}

export default Title