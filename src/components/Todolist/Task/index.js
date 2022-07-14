import React from "react";
import { motion } from "framer-motion";
import styles from "./task.module.scss";
import Icons from "../../Icons";

const Task = ({ item = [], onClickDeleteTask, onClickDone, onClickSaveTask }) => {
    const [isDone, setIsDone] = React.useState(item.check);
    const [isEdit, setIsEdit] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(item.text);
    const textareaRef = React.useRef(null);

    const onDoneTask = (check, id) => {
        onClickDone({ check: !check, id });
        setIsDone(!isDone);
        isEdit && setIsEdit(!isEdit);
    }

    const onEditTask = () => {
        setIsEdit(!isEdit);
        isDone && setIsDone(!isDone);
    }

    const onSaveTask = (text, check, id) => {
        onClickSaveTask({ text, check, id });
        setIsEdit(!isEdit);
    }

    const onChangeInputValue = (e) => {
        setInputValue(e.target.value);
    }

    React.useEffect(() => {
        textareaRef.current.style.height = "38px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [inputValue]);

    return (
        <motion.div
            className={styles.task}
            initial={{x:-100}}
            animate={{ x: 0 }}
            exit={{ x: -100}}
        >
            <button
                onClick={() => onDoneTask(isDone, item.id)}
                style={{
                    pointerEvents: isEdit ? 'none' : null
                }}
            >
                <Icons id={isDone ? "done" : "circle"} />
            </button>
            <textarea
                ref={textareaRef}
                className={styles.textarea}
                style={{
                    textDecoration: isDone ? 'line-through' : null
                }}
                onChange={onChangeInputValue}
                value={inputValue}
                disabled={isEdit ? "" : "disabled"}
            />
            {isEdit ?
                <button
                    onClick={() => onSaveTask(inputValue, isDone, item.id)}
                    disabled={inputValue ? "" : "disabled"}
                >
                    <Icons id="save" />
                </button>
                :
                <button onClick={onEditTask}>
                    <Icons id="edit" />
                </button>
            }
            <button onClick={() => onClickDeleteTask(item.id)}>
                <Icons id="close" />
            </button>
        </motion.div>
    )
}

export default Task;