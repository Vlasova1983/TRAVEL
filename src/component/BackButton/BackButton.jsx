import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';

import styles from './BackButton.module.css';

const BackButton = () => {  
    const navigate = useNavigate();
    const goBack = () => {        
        navigate(-1);        
    }

    return (       
        <button onClick={goBack} type="button" className={styles.backButton}>
            <Icon path={mdiArrowLeft} size={1} />            
                <p className={styles.backButtonText}>Back</p>                 
        </button>           
    )
}
export default BackButton;