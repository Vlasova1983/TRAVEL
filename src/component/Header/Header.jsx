import Burger from '../Burger/Burger';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import styles from '../Header/Header.module.css';

const Header = () => {     
    return (      
        <>            
          <header className={styles.header}>
            <div className={styles.conteiner}>               
                <div className={styles.menuConteiner}>
                    <Burger/>               
                    <Logo text={'trxvl.'}/>
                    <div></div>
                    <Navigation/>
                </div>                   
                <h1 className={styles.title}>The whole world awaits.</h1>                  
                <SearchForm/> 
                </div>                                                      
            </header>     
                        
        </>                
    ) 
}

export default Header;