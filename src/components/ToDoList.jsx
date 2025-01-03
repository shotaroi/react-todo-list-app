import { useState } from 'react';
import '../index.css';

function ToDoList({ tasks, deleteTask, toggleTask }) {

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{textDecoration: task.completed ? "line-through" : "none"}} >
                    <span onClick={() => toggleTask(task.id)}>{task.description}</span>
                    <button>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ToDoList;