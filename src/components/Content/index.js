import styles from "./content.module.scss";
import Icons from "../Icons";

const Content = () => {
    return(
        <main>
            <h2>Content</h2>
            <Icons id="edit" />
            <Icons id="circle" />
            <Icons id="done" />
            <Icons id="close" />
        </main>
    )
}

export default Content;