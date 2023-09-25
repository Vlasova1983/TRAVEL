import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../Logo/Logo.module.css';

const Logo = ({text}) => {     
    return (      
        <Link to="">
            <span className={styles.logo}>{text}</span>
        </Link>           
    ) 
}

export default Logo;

Logo.propTypes = {   
    children: PropTypes.string,    
}