import styles from './Header.module.css';

function Header() {
    return (
        <div>
            <h1 className={styles.logo}> EBay</h1>
            <input type="text" placeholder="Search for products" className={styles.search} />
        </div>
    )
}

export default Header;