import React, {useState} from 'react';
import styles from './Sidebar.module.css';

import add from '../../assets/img/add.svg'

import TaskBlockItem from "./taskBlockItem/TaskBlockItem";

const Sidebar = (props) => {

    const {tasks, deleteTasksBlock, setActiveTasksBlockId, addTaskBlock} = props;

    const [addTaskBlockValue, setAddTaskBlockValue] = useState("");
    const [addTaskBlockVisible, setAddTaskBlockVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(addTaskBlockValue.length !== 0) {
            addTaskBlock(addTaskBlockValue);
            setAddTaskBlockVisible(false);
            setAddTaskBlockValue('');
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                todo
            </div>
            <div className={styles.tasksItems}>
                {tasks.map(t => {
                    return <TaskBlockItem key={t.id} id={t.id} title={t.title} setActiveTasksBlockId={setActiveTasksBlockId} deleteTasksBlock={deleteTasksBlock}/>
                })}
            </div>
            <div className={styles.addTaskBlockWrapper}>
                {addTaskBlockVisible ? <div className={styles.addTaskBlockForm}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder={"task block value"} value={addTaskBlockValue} onChange={(e) => setAddTaskBlockValue(e.target.value)}/>
                        <button>Add</button>
                    </form>
                </div> : null}
                <div className={styles.addTaskBlock} onClick={() => setAddTaskBlockVisible(!addTaskBlockVisible)}>
                    <img src={add} alt={'add'} className={styles.add} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
