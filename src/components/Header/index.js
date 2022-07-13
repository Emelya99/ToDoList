import styles from "./header.module.scss";
import Icons from "../Icons";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.wrapper} container`}>
                <a href="/">
                    <Icons id="logo" />
                </a>
            </div>
        </header>
    )
}

export default Header;