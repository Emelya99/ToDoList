import React from "react";
import axios from 'axios';
import styles from "./todolist.module.scss";
import Title from "../Title";
import AddTasks from "./AddTasks";
import Task from "./Task";

const Todolist = () => {
    const [task, setTask] = React.useState([]);
    

    React.useEffect(() => {
        axios.get('https://625187db2dc339451d2ef136.mockapi.io/ToDoList')
            .then(res => {
                return setTask(res.data);
            })
    }, []);

    const onClickAddTask = (obj) => {
        
        axios.post(`https://625187db2dc339451d2ef136.mockapi.io/ToDoList`, {
            text: obj.text,
            check: obj.check
        })
        .then((res) => {
            const newTask = {
                id: res.data.id,
                text: obj.text,
                check: obj.check
            }
            setTask((prev) => [...prev, newTask]);
        })
    }

    const onClickDone = (obj) => {
        axios.put(`https://625187db2dc339451d2ef136.mockapi.io/ToDoList/${obj.id}`, {
            check: obj.check
        });
    }

    const onClickDeleteTask = (id) => {
        axios.delete(`https://625187db2dc339451d2ef136.mockapi.io/ToDoList/${id}`);
        setTask((prev) => prev.filter(item => item.id !== id));
    }

    const onClickSaveTask = (obj) =>{
        axios.put(`https://625187db2dc339451d2ef136.mockapi.io/ToDoList/${obj.id}`, {
            text: obj.text,
            check: obj.check
        });
    }

    return (
        <section className={styles.todolist}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Title title="Tasks" />
                    <AddTasks
                        onClickAddTask={obj => onClickAddTask(obj)}
                    />
                    {task.slice(0).reverse().map((item) => (
                        <Task
                            key={item.id}
                            item={item}
                            onClickDeleteTask={onClickDeleteTask}
                            onClickDone={obj => onClickDone(obj)}
                            onClickSaveTask={obj => onClickSaveTask(obj)}
                        />
                    ))}
                    {task.length === 0 && <p className={styles.noTaskText}>No tasks added yet</p>}
                </div>
            </div>
        </section>

    );
}

export default Todolist;