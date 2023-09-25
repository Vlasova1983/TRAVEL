import { PropTypes } from 'prop-types';
import { ReactComponent as Star } from './ant-design_star-filled.svg'
import styles from './OneCard.module.css';

const OneCard = ({item}) => {
    const travel = item[0]
    console.log(travel)
    return (
        <>
            <div className={styles.card} >
                <div className={styles.conteiner}>                     
                    <div className={styles.boxText}>
                        <div>
                            <h2>{travel.hotel_name}</h2> 
                            <p className={styles.text}>{travel.address} {travel.city_in_trans} {travel.country_trans}</p>
                        </div>                        
                        <p className={styles.text}>
                            <Star/>
                            {travel.review_score}
                        </p>                                                         
                    </div>
                    <div className={styles.boxImage}>
                        <img className={styles.image} src={travel.max_photo_url} alt="" loading="lazy"/> 
                    </div >
                </div>                     
            </div>
        </>
    )
}
export default OneCard;

OneCard.propTypes = {
    item: PropTypes.array,
}