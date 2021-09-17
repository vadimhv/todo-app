import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Menu from "./components/todos/menu/Menu";
import TodosItems from "./components/todos/todosItems/TodosItems";
import {useState} from "react";

function App() {
    const [tasksBlock, setTasksBlock] = useState([
        {
            id: 1, title: 'sport', todos: [
                {id: 1, title: 'The first task title', text: 'text1', checked: false},
                {id: 2, title: 'The second task title', text: 'text2', checked: false},
                {id: 3, title: 'The third task title', text: 'text3', checked: false}
            ]
        },
        {
            id: 2, title: 'work', todos: [
                {id: 1, title: 'The fourth task title', text: 'text4', checked: true},
                {id: 2, title: 'The fifth task title', text: 'text5', checked: false},
                {id: 3, title: 'The sixth task title', text: 'text6', checked: false}
            ]
        }
    ]);
    const [activeTasksBlockId, setActiveTasksBlockId] = useState(1);

    /* Popup */
    const [addTaskPopup, setAddTaskPopup] = useState(false);
    /* ----- */

    const deleteTask = (item) => {
        setTasksBlock(tasksBlock.filter(tasksBlockItem => {
            if (tasksBlockItem.id === activeTasksBlockId) {
                const index  = tasksBlockItem.todos.indexOf(item);
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
        console.log(activeTasksBlockId)
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
                 return tasksBlockItem.todos = [...tasksBlockItem.todos.map(t => t.id === id ? {id: t.id, title: title, text: text, checked: false} : t)]
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
            id: tasksBlock[tasksBlock.length - 1].id + 1,
            title: body,
            todos: []
        }
        setTasksBlock([...tasksBlock, newTaskBlock]);
        setActiveTasksBlockId(tasksBlock.length + 1);
    }

    const showTodo = tasksBlock.filter(t => t.id === activeTasksBlockId ? t.todos : null);

    return (
        <div className='AppWrapper'>
            <div className="App">
                <Sidebar tasks={tasksBlock} deleteTasksBlock={deleteTasksBlock}
                         activeTasksBlock={activeTasksBlockId} setActiveTasksBlockId={setActiveTasksBlockId} changeTasksBlock={changeTasksBlock} addTaskBlock={addTaskBlock}/>
                <div>
                    <Menu setAddTaskPopup={setAddTaskPopup}/>
                    <TodosItems todo={showTodo} deleteTask={deleteTask} editTask={editTask} doToDo={doTodo} addTask={addTask}
                                addTaskPopup={addTaskPopup}
                                setAddTaskPopup={setAddTaskPopup}/>
                </div>
            </div>
        </div>
    );
}

export default App;
