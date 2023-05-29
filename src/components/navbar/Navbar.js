import styles from './Navbar.module.css'
import burger from '../../assets/Hamburger_icon.svg.png'
const Navbar =()=>{
    return(
        <div className={styles.navbar}>
            <h1 className={styles.h1}>React learning project</h1>
            <ul className={styles.menu}>
                <li>
                <a href="">Apie</a>
                </li>
                <li>
                <a href="">Objektai</a>
                </li>
                <li>
                <a href="">Kontaktai</a>
                </li>
            </ul>
            <button className={styles.navButton}>
                <img className={styles.menuBurger} src={burger} alt='navbar-image'/>
             </button>
        </div>
    )
}
export default Navbar;