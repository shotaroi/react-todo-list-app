import { useState } from 'react';
import '../index.css';

function ToDoList({ tasks, deleteTask }) {

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.description}
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ToDoList;