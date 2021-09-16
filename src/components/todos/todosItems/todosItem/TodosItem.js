import React, {useState} from 'react';
import styles from "../TodosItems.module.css";
import Popup from "../../../common/popup/Popup";

const TodosItem = (props) => {

    const {id, checked, title, text, doToDo, deleteTask, editTask} = props;

    const [showingMenu, setShowingMenu] = useState(false);
    const [showingChangePopup, setShowingChangePopup] = useState(false);

    return (
        <div key={id} className={styles.item}>
            <div className={styles.itemContentWrapper}>
                <div className={styles.textAndMenuWrapper}>
                    <div>
                        <span className={`${checked ? styles.checked : null} ${styles.title}`}>{title}</span>
                    </div>
                    <div className={styles.showingMenuTrigger} onClick={() => setShowingMenu(!showingMenu)}>
                        ...
                    </div>
                </div>

                {showingMenu ?
                    <div className={styles.menuWrapper}>
                        <div className={`${styles.menu} `}>
                            <div onClick={() => {setShowingChangePopup(true); setShowingMenu(false);}} className={styles.deleteTrigger}>edit</div>
                            <div onClick={() => deleteTask(id)} className={styles.deleteTrigger}>delete</div>
                        </div>
                    </div>
                    : null}
                {showingChangePopup ?
                    <Popup btnName={'Save'} titleValue={title} textValue={text}
                           submitFunction={((title, text) => editTask(id, title, text))}
                           hidePopUpFunc={setShowingChangePopup}/>
                    : null}
                <div className={styles.text}>
                    <span className={`${checked ? styles.checked : null}`}>{text}</span>
                </div>
                <div className={styles.inputWrapper}>
                    <label className={styles.doneLabel}>done
                        <input type="checkbox" checked={checked} onChange={() => doToDo(id)}
                               className={styles.input}/></label>
                </div>
            </div>
        </div>
    );
};

export default TodosItem;
