import React from 'react';
import styles from './Menu.module.css';

/* Img */
import add from '../../../assets/img/add.svg';
const Menu = (props) => {

    const {setAddTaskPopup} = props;
    return (
        <div className={styles.menu}>
            <div className={styles.add}>
                <img src={add} className={styles.plus} alt="plus" onClick={() => setAddTaskPopup(true)}/>
            </div>
        </div>
    );
};

export default Menu;
