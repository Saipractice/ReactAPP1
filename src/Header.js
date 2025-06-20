import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header(){
    return (
        <div>
            <h1 className={styles.logo}> EBay</h1>
            <input type="text" placeholder="Search for products" className={styles.search} />

            
            {/* <Link to="/contact">Contact</Link> */}

            {/* <a href='/about' style={{padding: "20px"}}>About</a>
            <a href='/contact'>Contact</a> */}
        </div>
    )
}

export default Header;