import styles from "./title.module.scss";

const Title = (props) => {
    return(
        <h2 className={`${styles.title} title`}>{props.title}</h2>
    )
}

export default Title;