import { useState } from 'react'
import '../App.css'

function App() {

  return (
    <>
      <div className='container'>
        <div className="item">
          <h1>Todo-list</h1>
            <form action="submit">
              <input type="text" />
              <button>Add ToDo</button>
            </form>
        </div>
        
      </div>
    </>
  )
}

export default App
