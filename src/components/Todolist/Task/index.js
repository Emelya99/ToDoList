import React from "react";
import styles from "./task.module.scss";
import Icons from "../../Icons";

const Task = ({ onDeleteTask = [], item, onClickDone, onSaveTask }) => {
    const [isDone, setIsDone] = React.useState(item.check);
    const [isEdit, setIsEdit] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(item.text);

    const onDoneTask = (check, id) => {
        onClickDone({ check: !check, id });
        setIsDone(!isDone);
        isEdit && setIsEdit(!isEdit);
    }

    const onEditTask = () => {
        setIsEdit(!isEdit);
        isDone && setIsDone(!isDone);
    }

    const clickOnSaveTask = (text, check, id) => {
        onSaveTask({text, check, id});
        setIsEdit(!isEdit);
    }

    const onChangeInputValue = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className={styles.task}>
            <button
                onClick={() => onDoneTask(isDone, item.id)}
            >
                <Icons id={isDone ? "done" : "circle"} />
            </button>
            <textarea
                className={styles.textarea}
                style={{
                    textDecoration: isDone ? 'line-through' : null
                }}
                onChange={onChangeInputValue}
                value={inputValue}
                disabled={isEdit ? "" : "disabled"}
            />
            {isEdit ?
                <button onClick={() => clickOnSaveTask(inputValue,isDone,item.id)}>
                    <Icons id="save" />
                </button>
                :
                <button onClick={onEditTask}>
                    <Icons id="edit" />
                </button>
            }
            <button onClick={() => onDeleteTask(item.id)}>
                <Icons id="close" />
            </button>
        </div>
    )
}

export default Task;