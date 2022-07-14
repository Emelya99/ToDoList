import React from "react";
import styles from "./addtasks.module.scss";

const AddTasks = ({ onClickAddTask }) => {
    const [inputValue, setInputValue] = React.useState('');

    const onChangeInputValue = (event) => {
        setInputValue(event.target.value);
    }

    const onAddTask = (text,check) => {
        onClickAddTask({text,check});
        setInputValue('');
    }

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                placeholder="Enter a task" 
                value={inputValue}
                onChange={onChangeInputValue}
            />
            <button
                className={styles.btn}
                onClick={() => onAddTask(inputValue, false)}>
                Add task
            </button>
        </div>
    )
}

export default AddTasks;