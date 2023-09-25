import { useParams } from 'react-router-dom';
import OneCard from '../../component/OneCard/OneCard';
import BackButton from '../../component/BackButton/BackButton';
import styles from './OneCardPage.module.css';

const OneCardPage = () => {
    const { travelId } = useParams();
    const data = JSON.parse(localStorage.getItem('data'));
    const item = data.filter((item) => item.id.includes(travelId));
    return (        
        <section className={styles.conteiner}>
            <BackButton/>                
            <div className={styles.conteinerPage}>                
                {<OneCard item={item} />}
            </div>
        </section>                
    );
};

export default OneCardPage;