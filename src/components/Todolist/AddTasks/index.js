import styles from "./addtasks.module.scss";

const AddTasks = ({onClickAddTask}) => {



    return(
        <div className={styles.wrapper}>
            <input className={styles.input} type="text" placeholder="Enter a task" />
            <button className={styles.btn} onClick={onClickAddTask}>Add task</button>
        </div>
    )
}

export default AddTasks;