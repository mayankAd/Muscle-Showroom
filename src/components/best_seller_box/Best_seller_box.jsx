import styles from './Best_seller_box.module.css'

const Best_seller_box = ({image}) => {
  return (
    <div className={`${styles.container}`} >
        <img src={image} alt="" />
    </div>
  )
}

export default Best_seller_box