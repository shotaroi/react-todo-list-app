import { useState } from 'react';
import '../index.css';

function ToDoList({ tasks }) {

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.description}
                    <button>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ToDoList;