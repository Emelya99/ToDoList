import React from "react";
import styles from "./task.module.scss";
import Icons from "../../Icons";

const Task = ({ onDeleteTask = [], item, onClickDone }) => {
    const [isDone, setIsDone] = React.useState(item.check);
    const [isEdit, setIsEdit] = React.useState(false);


    const onDoneTask = (text,check,id) => {
        onClickDone({text,check,id});
        setIsDone(!isDone);
        isEdit && setIsEdit(!isEdit);
    }

    const onEditTask = () => {
        setIsEdit(!isEdit);
    }

    return (
        <div className={styles.task}>
            <button
                onClick={() => onDoneTask(item.text,item.check,item.id)}
            >
                <Icons id={ isDone ? "done" : "circle" } />
            </button>
            <textarea
                className={styles.textarea}
                style={{
                    textDecoration: isDone ? 'line-through' : null
                }}
                value={item.text}
                disabled={isEdit ? "" : "disabled" }
            />
            <button
                onClick={onEditTask}
            >
                <Icons id={ isEdit ? "save" : "edit" } />
            </button>
            <button onClick={() => onDeleteTask(item.id)}>
                <Icons id="close" />
            </button>
        </div>
    )
}

export default Task;