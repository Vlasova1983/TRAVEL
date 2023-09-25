import FooterMobile from './FooterMobile/FooterMobile';
import FooterDesctop from './FooterDesctop/FooterDesctop';
import styles from '../Footer/Footer.module.css';

const Footer = () => {     
    return (                 
        <footer id="footer" className={styles.footer}>
            <div className={styles.conteiner}>
                <div className={styles.mobile}>
                    <FooterMobile />
                </div>
                <div className={styles.desctop}>
                    <FooterDesctop />
                </div>                 
            </div>
        </footer>                 
    ) 
}

export default Footer;