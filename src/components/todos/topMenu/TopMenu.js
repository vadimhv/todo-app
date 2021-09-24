import React from 'react';
import styles from './TopMenu.module.css';

/* Img */
import add from '../../../assets/img/add.svg';
const TopMenu = (props) => {

    const {setAddTaskPopup, tasks} = props;
    return (
        <>
            {
                tasks.length > 0 ? <div className={styles.menu}>
                    <div className={styles.add}>
                        <img src={add} className={styles.plus} alt="plus" onClick={() => setAddTaskPopup(true)}/>
                    </div>
                </div> : null
            }
        </>
    );
};

export default TopMenu;
