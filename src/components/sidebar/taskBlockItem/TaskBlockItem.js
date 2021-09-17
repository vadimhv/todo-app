import React from 'react';
import styles from "../Sidebar.module.css";

import cancel from "../../../assets/img/cancel.png";

const TaskBlockItem = (props) => {

    const {tasks, activeTasksBlock, setActiveTasksBlockId, deleteTasksBlock, changeTasksBlock} = props;

    return (
        <div className={styles.tasksItem} onClick={() => changeTasksBlock(tasks.id)}>
            <div className={`${styles.title} ${activeTasksBlock === tasks.id ? null : styles.titleActiveTaskBlock}`}>
                {tasks.title}
            </div>
            <div>
                <img src={cancel} className={styles.cancel} alt="cancel" onClick={() => {deleteTasksBlock(tasks.id); setActiveTasksBlockId(tasks.id)}}/>
            </div>
        </div>
    );
};

export default TaskBlockItem;
