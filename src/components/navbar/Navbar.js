import styles from './Navbar.module.css'
import burger from '../../assets/Hamburger_icon.svg.png'
import Logo from '../../assets/logo.png'
const Navbar =()=>{
    return(
        <div className={styles.navbar}>
        <img className={styles.logo} src={Logo}/>
            <ul className={styles.menu}>
                <li>
                <a href="/">Apie</a>
                </li>
                <li>
                <a href="/culture">Kultūros objektai</a>
                </li>
                <li>
                <a href="/contacts">Kontaktai</a>
                </li>
            </ul>
            <button className={styles.navButton}>
                <img className={styles.menuBurger} src={burger} alt='navbar-image'/>
             </button>
        </div>
    )
}
export default Navbar;