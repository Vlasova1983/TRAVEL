import { PropTypes } from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from '../Layout/Layout.module.css';

const Layout = ({ children }) => {    
    return (      
        <>           
            <Header/>           
            <main className={styles.main}>{children}</main>            
            <Footer/>                        
        </>                
    ) 
}

export default Layout;
Layout.propTypes = {   
    children: PropTypes.object,    
}