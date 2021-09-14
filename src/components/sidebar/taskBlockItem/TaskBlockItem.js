import React from 'react';
import styles from "../Sidebar.module.css";

import cancel from "../../../assets/img/cancel.png";

const TaskBlockItem = (props) => {

    const {id, title, setActiveTasksBlockId, deleteTasksBlock} = props;

    return (
        <div className={styles.tasksItem} key={id} onClick={() => setActiveTasksBlockId(id)}>
            <div className={styles.title}>
                {title}
            </div>
            <div>
                <img src={cancel} className={styles.cancel} alt="cancel" onClick={() => deleteTasksBlock(id)}/>
            </div>
        </div>
    );
};

export default TaskBlockItem;
