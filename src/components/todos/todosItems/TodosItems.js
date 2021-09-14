import React from 'react';
import styles from './TodosItems.module.css';
import Popup from "./popup/Popup";
import TodosItem from "./todosItem/TodosItem";


const TodosItems = (props) => {

    const {todo, deleteTask, doToDo, addTask, todosInput, todosTitleInput, addTaskPopup, setAddTaskPopup} = props;


    return (
        <div className={styles.wrapper}>
            {
                addTaskPopup ? <Popup addTask={addTask} setAddTaskPopup={setAddTaskPopup} todosTitleInput={todosTitleInput}
                                      todosInput={todosInput}/> : null}
            {
                todo.map(t => {
                    return t.todos.length > 0 ? t.todos.map(t => <TodosItem key={t.id} id={t.id} checked={t.checked}
                                                                            title={t.title} text={t.text}
                                                                            doToDo={doToDo} deleteTask={deleteTask}/>) :
                        <span>No tasks, add something in menu above</span>
                })}
        </div>
    );
};

export default TodosItems;
