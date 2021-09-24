import React, {useState} from 'react';
import styles from './Sidebar.module.css';

import add from '../../assets/img/add.svg'

import TaskBlockItem from "./taskBlockItem/TaskBlockItem";
import AddingTaskBlockForm from "./taskBlockForm/AddingTaskBlockForm";

const Sidebar = (props) => {

    const {tasks, deleteTasksBlock, activeTasksBlock, setActiveTasksBlockId, addTaskBlock, changeTasksBlock} = props;

    const [addTaskBlockVisible, setAddTaskBlockVisible] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                todo
            </div>
            <div className={styles.tasksItems}>
                {tasks.map(t => {
                    return <TaskBlockItem key={t.id} tasks={t} activeTasksBlock={activeTasksBlock}
                                          setActiveTasksBlockId={setActiveTasksBlockId}
                                          deleteTasksBlock={deleteTasksBlock}
                                          changeTasksBlock={changeTasksBlock}
                    />
                })}
            </div>
            <div className={styles.addTaskBlockWrapper}>
                {addTaskBlockVisible ? <AddingTaskBlockForm setAddTaskBlockVisible={setAddTaskBlockVisible} addTaskBlock={addTaskBlock}/> : null}
                <div className={styles.addTaskBlock} onClick={() => setAddTaskBlockVisible(!addTaskBlockVisible)}>
                    <img src={add} alt={'add'} className={styles.add}/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
