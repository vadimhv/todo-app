import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Menu from "./components/todos/menu/Menu";
import TodosItems from "./components/todos/todosItems/TodosItems";
import {useEffect, useState} from "react";

function App() {
    const [tasksBlock, setTasksBlock] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('tasks' || '[]'));
        setTasksBlock(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasksBlock));
    }, [tasksBlock]);


    const [activeTasksBlockId, setActiveTasksBlockId] = useState(0);
    /* Popup */
    const [addTaskPopup, setAddTaskPopup] = useState(false);
    /* ----- */

    const deleteTask = (item) => {
        setTasksBlock(tasksBlock.filter(tasksBlockItem => {
            if (tasksBlockItem.id === activeTasksBlockId) {
                const index = tasksBlockItem.todos.indexOf(item);
                return tasksBlockItem.todos = [...tasksBlockItem.todos.splice(0, index), ...tasksBlockItem.todos.splice(index + 1, tasksBlockItem.todos.length)]
            }
            return tasksBlock
        }))
    }

    const changeTasksBlock = (id) => {
        setActiveTasksBlockId(id);
    }

    const deleteTasksBlock = (id) => {
        setTasksBlock(tasksBlock.filter(t => t.id !== id));
        if (id === tasksBlock[0].id && tasksBlock.length > 1) {
            setActiveTasksBlockId(tasksBlock[1].id)
        } else {
            if(id === activeTasksBlockId && tasksBlock.length > 1) {
                setActiveTasksBlockId(tasksBlock[id - 1].id);
            }
        }
    }

    const addTask = (title, text) => {
        let newTodo = {}
        setTasksBlock(tasksBlock.filter(tasksBlockItem => {
            if (tasksBlockItem.id === activeTasksBlockId) {
                newTodo = {
                    id: tasksBlockItem.todos.length + 1,
                    title: title,
                    text: text,
                    checked: false
                }
                return tasksBlockItem.todos = [...tasksBlockItem.todos, newTodo]
            }
            return tasksBlockItem
        }));
    }

    const editTask = (id, title, text) => {
        setTasksBlock(tasksBlock.filter(tasksBlockItem => {
            if (tasksBlockItem.id === activeTasksBlockId) {
                return tasksBlockItem.todos = [...tasksBlockItem.todos.map(t => t.id === id ? {
                    id: t.id,
                    title: title,
                    text: text,
                    checked: false
                } : t)]
            }
            return tasksBlockItem
        }));
    }

    const doTodo = (id) => {
        setTasksBlock(tasksBlock.filter(tasksBlockItem => {
            if (tasksBlockItem.id === activeTasksBlockId) {
                tasksBlockItem.todos.map(t => {
                    if (t.id === id) {
                        t.checked = !t.checked
                    }
                    return null
                })
            }
            return tasksBlock
        }))
    }

    const addTaskBlock = (body) => {
        let newTaskBlock = {
            id: tasksBlock.length > 0 ? tasksBlock[tasksBlock.length - 1].id + 1 : 0,
            title: body,
            todos: []
        }
        setTasksBlock([...tasksBlock, newTaskBlock]);
        if (tasksBlock.length === 0) {
            setActiveTasksBlockId(0);
        } else {
            setActiveTasksBlockId(tasksBlock[tasksBlock.length - 1].id + 1);
        }
    }

    const showTodo = () => {
        return tasksBlock.filter(t => t.id === activeTasksBlockId ? t.todos : null);
    }

    return (
        <div className='AppWrapper'>
            <div className="App">
                <Sidebar tasks={tasksBlock} deleteTasksBlock={deleteTasksBlock}
                         activeTasksBlock={activeTasksBlockId} setActiveTasksBlockId={setActiveTasksBlockId}
                         changeTasksBlock={changeTasksBlock} addTaskBlock={addTaskBlock}/>
                <div>
                    <Menu setAddTaskPopup={setAddTaskPopup} tasks={showTodo()}/>
                    <TodosItems todo={showTodo()} deleteTask={deleteTask} editTask={editTask} doToDo={doTodo}
                                addTask={addTask}
                                addTaskPopup={addTaskPopup}
                                setAddTaskPopup={setAddTaskPopup}/>
                </div>
            </div>
        </div>
    );
}

export default App;
