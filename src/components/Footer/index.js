import styles from "./footer.module.scss";
import Icons from "../Icons";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={`${styles.wrapper} container`}>
                <a href="/">
                    <Icons id="logo" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;