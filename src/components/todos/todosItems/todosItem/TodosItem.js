import React, {useState} from 'react';
import styles from "../TodosItems.module.css";
import Popup from "../../../common/popup/Popup";
import ItemMenu from "./itemMenu/ItemMenu";

const TodosItem = (props) => {

    const {doToDo, deleteTask, editTask, item} = props;

    const [showingMenu, setShowingMenu] = useState(false);
    const [showingChangePopup, setShowingChangePopup] = useState(false);

    return (
        <div key={item.id} className={styles.item}>
            <div className={styles.itemContentWrapper}>
                <div className={styles.textAndMenuWrapper}>
                    <div>
                        <span className={`${item.checked ? styles.checked : null} ${styles.title}`}>{item.title}</span>
                    </div>
                    <div className={styles.showingMenuTrigger} onClick={() => setShowingMenu(!showingMenu)}>
                        ...
                    </div>
                </div>
                {showingMenu ?
                    <ItemMenu item={item} setShowingChangePopup={setShowingChangePopup} setShowingMenu={setShowingMenu} deleteTask={deleteTask} />
                    : null}
                <div className={styles.text}>
                    <span className={`${item.checked ? styles.checked : null}`}>{item.text}</span>
                </div>
                <div className={styles.inputWrapper}>
                    <label className={`${styles.doneLabel} ${item.checked ? null : styles.notDone}`}>done
                        <input type="checkbox" checked={item.checked} onChange={() => doToDo(item.id)}
                               className={`${styles.input} ${item.checked ? null : styles.notToDoInput}`}/></label>
                </div>

                {showingChangePopup ?
                    <Popup btnName={'Save'} titleValue={item.title} textValue={item.text}
                           submitFunction={((title, text) => editTask(item.id, title, text))}
                           hidePopUpFunc={setShowingChangePopup}/>
                    : null}
            </div>
        </div>
    );
};

export default TodosItem;
