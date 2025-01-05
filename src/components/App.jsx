import { useState, useEffect } from 'react'
import ToDoList from './TodoList'
import NewTask from './NewTask'
import '../index.css'

const LOCAL_STORAGE_KEY = "todo:savedTasks"; 

function App() {
  const [ tasks, setTasks ] = useState([{id: 1, description: "test", completed: false}, {id: 2, description: "test2", completed: false }]);
  const [ input, setInput ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAndSaveTasks([...tasks, {id: Date.now(), description: input, completed: false }]);
    setInput("");
  }

  const handleChange = (e) => {
    if (e.target.value.length < 60) {
      setInput(e.target.value);
    }
  }

  const deleteTask = (id) => {
    setAndSaveTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleTask = (id) => {
    setAndSaveTasks(tasks.map(task => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  }

  const handleEdit = (id, editedTask) => {
    setAndSaveTasks(tasks.map(task => (
      task.id === id ? {...task, description: editedTask } : task
    )));
  }

  const setAndSaveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  const loadSavedTasks = () => {
    const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []); 

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
