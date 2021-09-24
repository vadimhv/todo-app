import React from 'react';
import styles from "../../TodosItems.module.css";

const ItemMenu = (props) => {

    const {item, setShowingChangePopup, setShowingMenu, deleteTask} = props;

    return (
        <div className={styles.menuWrapper}>
            <div className={`${styles.menu} `}>
                <div onClick={() => {setShowingChangePopup(true); setShowingMenu(false);}} className={styles.deleteTrigger}>edit</div>
                <div onClick={() => deleteTask(item)} className={styles.deleteTrigger}>delete</div>
            </div>
        </div>
    );
};

export default ItemMenu;
