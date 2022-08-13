import React from 'react'
import InputField from './InputField'
import TodoList from './TodoList'

function App() {
  return (
    <div className='container'>
      <div className='heading'>
        <h1>Lion's To-Do List</h1>
      </div>
      <InputField />
      <TodoList />
    </div>
  )
}

export default App
