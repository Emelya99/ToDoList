import styles from "./addtasks.module.scss";

const AddTasks = () => {
    return(
        <div className={styles.wrapper}>
            <input className={styles.input} type="text" placeholder="Enter a task" />
            <button className={styles.btn}>Add task</button>
        </div>
    )
}

export default AddTasks;