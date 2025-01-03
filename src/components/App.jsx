import { useState } from 'react'
import ToDoList from './TodoList'
import '../index.css'

function App() {
  const [ tasks, setTasks ] = useState([{id: 1, description: "test", completed: false}, {id: 2, description: "test2", completed: false}]);
  const [ input, setInput ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, {id: Date.now(), description: input, completed: false}]);
    setInput("");
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  }

  return (
    <>
      <div className='container'>
        <div className="item">
          <h1>Todo-list</h1>
          <form action="submit">
            <input type="text" placeholder='Describe a task' value={input} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add</button>
          </form>
          <ToDoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>
        </div>
        
      </div>
    </>
  )
}

export default App
