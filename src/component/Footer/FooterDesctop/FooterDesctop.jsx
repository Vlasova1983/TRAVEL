import { Link} from 'react-router-dom';
import Logo from '../../Logo/Logo';
import { ReactComponent as Facebook } from './facebook .svg';
import { ReactComponent as Insta } from './instagram.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Youtube } from './youtube.svg';
import styles from './FooterDesctop.module.css';

const FooterDesctop = () => {     
    return (
        
        <>
            <div className={styles.footerConteiner}>
                <div className={styles.logo}>
                    <Logo text={'Trxvl.'} />
                </div>                
                <div className={styles.box}>
                    <Link className={styles.link}>Seslendirme ve Alt Jazz</Link> 
                    <Link className={styles.link}>Media Market</Link> 
                    <Link className={styles.link}>Gillie</Link> 
                    <Link className={styles.link}>Size Last</Link>                
                </div>
                <div className={styles.box}>
                    <Link className={styles.link}>Self Betimes</Link> 
                    <Link className={styles.link}>Yatırımcı İlişkileri</Link> 
                    <Link className={styles.link}>Basal Himmler</Link> 
                    <div></div> 
                </div>
                <div className={styles.box}>
                    <Link className={styles.link}>Yard Market</Link> 
                    <Link className={styles.link}>Is İmkanları</Link> 
                    <Link className={styles.link}>Car Tercihleri</Link> 
                    <div></div> 
                </div>
                <div className={styles.box}>
                    <Link className={styles.link}>Hedge Karla</Link> 
                    <Link className={styles.link}>Mullein Koşulları</Link> 
                    <Link className={styles.link}>Autumnal Bulgier</Link> 
                    <div></div> 
                </div>            
            </div> 
            <div className={styles.socioConteiner}>
                <Link className={styles.kod}>Helmet KOD</Link>
                <div className={styles.social}>
                    <Link className={styles.iconSocial}>
                        <Facebook aria-label={'icon-facebook'}/>                
                    </Link>
                    <Link className={styles.iconSocial}>
                        <Insta aria-label={'icon-insta'}/>                
                    </Link>
                    <Link className={styles.iconSocial}>
                        <Twitter aria-label={'icon-twitter'}/>                
                    </Link>
                    <Link className={styles.iconSocial}>
                        <Youtube aria-label={'icon-youtube'}/>                
                    </Link>
                </div>
            </div>
            <span className={styles.footnote}> 1997-2021 Netflix, Inc.   i-062d573a0ee099242 </span>        
        </>
                
                     
    ) 
}

export default FooterDesctop;