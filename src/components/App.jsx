import { useState } from 'react'
import '../App.css'

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
        </div>
        
      </div>
    </>
  )
}

export default App
