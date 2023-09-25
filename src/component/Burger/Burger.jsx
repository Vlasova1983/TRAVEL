import { Link} from 'react-router-dom';
import { ReactComponent as IconBurger } from './ci_menu-alt-03.svg'
import styles from '../Burger/Burger.module.css';

const Burger = () => {     
    return (      
        <Link  href="#footer"  className={styles.burger}>
            <IconBurger  aria-label={'icon-burger'}/>
        </Link>               
    ) 
}

export default Burger;