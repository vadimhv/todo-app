import React from 'react';
import styles from './TodosItems.module.css';
import Popup from "../../common/popup/Popup";
import TodosItem from "./todosItem/TodosItem";


const TodosItems = (props) => {

    const {
        todo,
        deleteTask,
        editTask,
        doToDo,
        addTask,
        addTaskPopup,
        setAddTaskPopup
    } = props;


    return (
        <div className={styles.wrapper}>
            {
                addTaskPopup ? <Popup btnName={"Add"} submitFunction={addTask} hidePopUpFunc={setAddTaskPopup}/> : null}
            {
                todo.map(t => {
                    return <React.Fragment key={t.id}>
                        {
                            t.todos.length > 0 ? (t.todos.map(t => <TodosItem key={t.id} id={t.id} checked={t.checked}
                                                                              title={t.title} text={t.text}
                                                                              doToDo={doToDo} editTask={editTask}
                                                                              deleteTask={deleteTask}
                                                                              setAddTaskPopup={setAddTaskPopup}/>)) :
                                <span>No tasks, add something above using button</span>
                        }
                    </React.Fragment>
                })}
        </div>
    );
};

export default TodosItems;
