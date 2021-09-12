import React from 'react';
import styles from './Sidebar.module.css';

/* Img */
import cancel from '../../assets/img/cancel.png';

const Sidebar = (props) => {

    const {tasks, deleteTasksBlock, setActiveTasksBlockId} = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                todo
            </div>
            <div className={styles.tasksItems}>
                {tasks.map((t,index) => {
                    return <div className={styles.tasksItem} key={t.id} onClick={() => setActiveTasksBlockId(t.id)}>
                        <div className={styles.tasksCount}>
                            {index + 1}
                        </div>
                        <div>
                            {t.title}
                        </div>
                        <div>
                            <img src={cancel} className={styles.cancel} alt="cancel" onClick={() => deleteTasksBlock(t.id)}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Sidebar;
