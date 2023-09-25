import { Link,useLocation  } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => { 
    let location = useLocation();  
       
    return (      
        <nav className={styles.nav} >
            <Link   to="" className={`${styles.link} ${
                  location.pathname ==='/'
                  ? styles.activ
                  :""                
                }`}
            >Home</Link>
            <Link  to="stays" className={`${styles.link} ${
                  location.pathname ==='/stays'
                  ? styles.activ
                  :""                
                }`} 
            >Stays</Link>
            <Link   to="flights" className={`${styles.link} ${
                  location.pathname ==='/flights'
                  ? styles.activ
                  :""                
                }`} >Flights</Link>
            <Link  to='packages' className={`${styles.link} ${
                  location.pathname ==='/packages'
                  ? styles.activ
                  :""                
                }`}                
            >Packages</Link>
            <Link  to='login' className={`${styles.link} ${
                  location.pathname ==='/login'
                  ? styles.activ
                  :""                
                }`}
            >Sign Up</Link>
        </nav>             
    ) 
}

export default Navigation;