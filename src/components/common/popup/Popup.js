import React, {useState} from 'react';
import styles from "./Popup.module.css";

const Popup = (props) => {

    const {btnName, submitFunction, hidePopUpFunc, titleValue, textValue} = props;


    const [todosTitleInput, setTodosTitleInput] = useState(titleValue ? titleValue : "");
    const [todosTextInput, setTodosTextInput] = useState(textValue ? textValue : "");

    const submitHandle = (e) => {
        e.preventDefault();
        if (todosTitleInput.length !== 0) {
            submitFunction(todosTitleInput, todosTextInput);
            hidePopUpFunc(false);
        }
    }

    return (
        <div>
            <div className={styles.overlay}>
                <div className={styles.popup}>
                    <form onSubmit={submitHandle}>
                        <div className={styles.popupTriggersWrapper}>
                            <div>
                                    <span className={styles.popupTrigger} onClick={() => {
                                        hidePopUpFunc(false)
                                        setTodosTitleInput('');
                                    }
                                    }>cancel</span>
                            </div>
                            <div>
                                <button className={`${styles.popupTrigger} ${styles.popupAddTrigger}`}>{btnName}</button>
                            </div>
                        </div>
                        <div className={styles.popupContentWrapper}>
                            <div>
                                <span className={styles.popupContentTitle}>Title</span>
                            </div>
                            <div>
                                <input type="text" className={styles.popupContentInput}
                                       placeholder={'add a title ...'} value={todosTitleInput}
                                       onChange={(e) => setTodosTitleInput(e.target.value)}/>
                            </div>
                        </div>
                        <div className={styles.popupContentWrapper}>
                            <div>
                                <span className={styles.popupContentTitle}>Text</span>
                            </div>
                            <div>
                                <input type="text" className={styles.popupContentInput}
                                       placeholder={'add a text ...'} value={todosTextInput}
                                       onChange={(e) => setTodosTextInput(e.target.value)}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Popup;
