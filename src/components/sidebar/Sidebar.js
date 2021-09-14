import React from 'react';
import styles from './Sidebar.module.css';

import TaskBlockItem from "./taskBlockItem/TaskBlockItem";

const Sidebar = (props) => {

    const {tasks, deleteTasksBlock, setActiveTasksBlockId} = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                todo
            </div>
            <div className={styles.tasksItems}>
                {tasks.map(t => {
                    return <TaskBlockItem id={t.id} title={t.title} setActiveTasksBlockId={setActiveTasksBlockId} deleteTasksBlock={deleteTasksBlock}/>
                })}
            </div>
        </div>
    );
};

export default Sidebar;
