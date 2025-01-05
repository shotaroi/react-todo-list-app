import { useState } from 'react';
import '../index.css';

function ToDoList({ tasks, deleteTask, toggleTask, handleEdit }) {
  const [ editingId, setEditingId ] = useState(null);
  const [ editedTask, setEditedTask ] = useState("");

  const handleEditedTask = (e) => {
    if (editedTask.length < 60) {
        setEditedTask(e.target.value);
    }
  }

  const handleClickEdit = (id) => {
    setEditingId(id);
  }

  const handleSave = () => {
    handleEdit(editingId, editedTask);
    setEditingId(null);
    setEditedTask("");
  }

  const handleCancel = () => {
    setEditingId(null);
  }

    return (
        <ul className='task'>
            {tasks.map((task) => (
                <li  key={task.id} >
                    { editingId === task.id  ?
                        <input type="text" value={editedTask} onChange={(e) => handleEditedTask(e)} /> :
                        <span style={{textDecoration: task.completed ? "line-through" : "none"}} onClick={() => toggleTask(task.id)}>{task.description}</span> 
                    }
                    { editingId === task.id ? 
                        <>
                            <button onClick={handleSave} >Save</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </> :
                        <>
                            <button onClick={() => handleClickEdit(task.id)}>Edit</button>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>    
                        </>
                    }
                </li>
            ))}
        </ul>
    )
}

export default ToDoList;