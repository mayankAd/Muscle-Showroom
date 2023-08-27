
import Best_seller_box from '../best_seller_box/Best_seller_box'
import styles from './Best_sellers.module.css'

const Best_sellers = () => {
  return (

    
    <div className={`${styles.container}`}>
      <h2>BEST SELLERS</h2>
      <div className={`${styles.content}`}>
      <Best_seller_box image={"images/bestseller1.jpg"}/>
      <Best_seller_box image={"images/bestseller2.jpg"}/>
      <Best_seller_box image={"images/bestseller3.jpg"}/>
      <Best_seller_box image={"images/bestseller4.jpg"}/>
      </div>
      
    </div>
  )
}

export default Best_sellers