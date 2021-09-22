import React from 'react';
import styles from './Menu.module.css';

/* Img */
import add from '../../../assets/img/add.svg';
const Menu = (props) => {

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

export default Menu;
