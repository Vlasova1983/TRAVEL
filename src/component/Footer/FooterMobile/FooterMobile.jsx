import { Link,useLocation } from 'react-router-dom';
import { ReactComponent as Home } from './ant-design_home-filled.svg';
import { ReactComponent as Packages } from './fa6-solid_suitcase-rolling.svg';
import { ReactComponent as Stays } from './ri_hotel-fill.svg';
import { ReactComponent as Flights} from './ic_baseline-flight.svg';

import styles from './FooterMobile.module.css';

const FooterMobile = () => { 
    let location = useLocation();    
    return (
        <>
            <Link to="" className={`${styles.link} ${
                  location.pathname ==='/'
                  ? styles.activ
                  :""                
                }`}
                >
                <Home aria-label={'icon-home'}/>
                <span>Home</span>
            </Link>
            <Link to='packages' className={`${styles.link} ${
                  location.pathname ==='/packages'
                  ? styles.activ
                  :""                
                }`}
            >
                < Packages  aria-label={'icon-packages'}/>
                <span>Packages</span>               
            </Link>
            <Link to="stays" className={`${styles.link} ${
                  location.pathname ==='/stays'
                  ? styles.activ
                  :""                
                }`}
            >
                <Stays aria-label={'icon-stays'}/>
                <span>Stays</span>
            </Link> 
            <Link  to="flights" className={`${styles.link} ${
                  location.pathname ==='/flights'
                  ? styles.activ
                  :""                
                }`}
            >
                <Flights aria-label={'icon-flights'}/>
                <span>Flights</span>
            </Link>       
            
        </>                 
                  
    ) 
}

export default FooterMobile;