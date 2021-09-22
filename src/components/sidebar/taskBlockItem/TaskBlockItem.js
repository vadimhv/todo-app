import React from 'react';
import styles from "../Sidebar.module.css";

import cancel from "../../../assets/img/cancel.png";

const TaskBlockItem = (props) => {

    const {tasks, activeTasksBlock, deleteTasksBlock, changeTasksBlock} = props;

    return (
        <div className={styles.tasksItem}>
            <div className={`${styles.title} ${activeTasksBlock === tasks.id ? null : styles.titleActiveTaskBlock}`}  onClick={() => changeTasksBlock(tasks.id)}>
                {tasks.title}
            </div>
            <div>
                <img src={cancel} className={styles.cancel} alt="cancel" onClick={() => {deleteTasksBlock(tasks.id); }}/>
            </div>
        </div>
    );
};

export default TaskBlockItem;
