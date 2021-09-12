import React, {useState} from 'react';
import styles from './TodosItems.module.css';

/* Img */
import deleteIcon from '../../../assets/img/delete2.svg';

const TodosItems = (props) => {

    const {todo, deleteTask, doToDo, addTask, todosInput, setTodosInput, addTaskPopup, setAddTaskPopup} = props;


    const submitHandle = (e) => {
        e.preventDefault();
        addTask(todosInput);
        setAddTaskPopup(false);
    }

    return (
        <div className={styles.wrapper}>
            {
                addTaskPopup ? <div className={styles.overlay}>
                    <div className={styles.popup}>
                        <form onSubmit={submitHandle}>
                            <div className={styles.popupTriggersWrapper}>
                                <div>
                                    <span className={styles.popupTrigger} onClick={() => setAddTaskPopup(false)}>cancel</span>
                                </div>
                                <div>
                                    <button className={`${styles.popupTrigger} ${styles.popupAddTrigger}`}>Add</button>
                                </div>
                            </div>
                            <div className={styles.popupContentWrapper}>
                                <div>
                                    <span className={styles.popupContentTitle}>Title</span>
                                </div>
                                <div>
                                    <input type="text" className={styles.popupContentInput} placeholder={'add a task ...'} value={todosInput} onChange={(e) => setTodosInput(e.target.value)}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> : null}
            {
                todo.map(t => {
                return t.todos.length > 0 ? t.todos.map(t => {
                    return <div key={t.id} className={styles.item}>
                        <div className={styles.inputTextBlock}>
                            <input type="checkbox" checked={t.checked} onChange={() => doToDo(t.id)}
                                   className={styles.input} />
                            <span className={t.checked ? styles.checked : null}>{t.text}</span>
                        </div>
                        <img src={deleteIcon} className={styles.delete} alt="" onClick={() => deleteTask(t.id)}/>
                    </div>
                }) : <span>No tasks, add something in menu above</span>
            })}
        </div>
    );
};

export default TodosItems;
