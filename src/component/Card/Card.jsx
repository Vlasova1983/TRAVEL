import { Link } from 'react-router-dom';
import { ReactComponent as Star } from './ant-design_star-filled.svg' 
import { PropTypes } from 'prop-types';


import styles from "./Card.module.css";

const Card = ({ item }) => {
  
  return(  
    <div className={styles.card} >
      <div className={styles.conteiner}>
        <div className={styles.boxImage}>
          <img className={styles.image} src={item.main_photo_url} alt="" loading="lazy"/> 
        </div > 
        <div className={styles.boxText}>
          <h2>{item.hotel_name}</h2> 
          <p className={styles.text}>{item.address}</p>
          <p className={styles.text}>
            <Star/>
            {item.review_score}
          </p>
          <div className={styles.buttonBox}>
            <Link  to={`/${item.hotel_id}`}className={styles.button}>more</Link>
          </div>                
        </div>
      </div>                     
    </div>            
  )         
}

export default Card;

Card.propTypes = {   
  item:PropTypes.object,
}