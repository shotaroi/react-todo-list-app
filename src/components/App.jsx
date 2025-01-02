import { useState } from 'react'
import ToDoList from './TodoList'
import '../index.css'

function App() {

  return (
    <>
      <div className='container'>
        <div className="item">
          <h1>Todo-list</h1>
          <form action="submit">
            <input type="text" placeholder='Describe a task'/>
            <button>Add</button>
          </form>
          <ToDoList />
        </div>
        
      </div>
    </>
  )
}

export default App
