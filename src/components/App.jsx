import { useState } from 'react'
import ToDoList from './TodoList'
import NewTask from './NewTask'
import '../index.css'

function App() {
  const [ tasks, setTasks ] = useState([{id: 1, description: "test", completed: false}, {id: 2, description: "test2", completed: false }]);
  const [ input, setInput ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, {id: Date.now(), description: input, completed: false }]);
    setInput("");
  }

  const handleChange = (e) => {
    if (e.target.value.length < 60) {
      setInput(e.target.value);
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  }

  const handleEdit = (id, editedTask) => {
    setTasks(tasks.map(task => (
      task.id === id ? {...task, description: editedTask } : task
    )));
  }

  return (
    <>
      <div className='container'>
        <div className="item">
          <h1>Todo-list</h1>
          <NewTask input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
          <ToDoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} handleEdit={handleEdit} />
        </div>    
      </div>
    </>
  )
}

export default App
