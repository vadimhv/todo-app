import React, {useState} from 'react';
import styles from "../Sidebar.module.css";

const AddingTaskBlockForm = (props) => {

    const {addTaskBlock, setAddTaskBlockVisible} = props;

    const [addTaskBlockValue, setAddTaskBlockValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (addTaskBlockValue.length !== 0) {
            addTaskBlock(addTaskBlockValue);
            setAddTaskBlockVisible(false);
            setAddTaskBlockValue('');
        }
    }

    return (
        <>
            {
                <div className={styles.addTaskBlockForm}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder={"task block value"} value={addTaskBlockValue}
                               onChange={(e) => setAddTaskBlockValue(e.target.value)}/>
                        <button>Add</button>
                    </form>
                </div>
            }
        </>
    );
};

export default AddingTaskBlockForm;
