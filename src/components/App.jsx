import { useState } from 'react'
import ToDoList from './TodoList'
import '../index.css'

function App() {
  const [ tasks, setTasks ] = useState([{id: 1, description: "test"}, {id: 2, description: "test2"}]);

  return (
    <>
      <div className='container'>
        <div className="item">
          <h1>Todo-list</h1>
          <form action="submit">
            <input type="text" placeholder='Describe a task'/>
            <button>Add</button>
          </form>
          <ToDoList tasks={tasks}/>
        </div>
        
      </div>
    </>
  )
}

export default App
