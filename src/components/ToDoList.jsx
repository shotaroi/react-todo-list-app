import { useState } from 'react';
import '../index.css';

function ToDoList() {
    const [ tasks, setTasks ] = useState(["test", "test2"]);

    return (
        <ul>
            {tasks.map((todo, index) => (
                <li>
                    {todo}
                    <button>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ToDoList;