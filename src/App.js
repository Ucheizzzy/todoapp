import React from 'react'
import { useState } from 'react'
import InputField from './InputField'
import TodoList from './TodoList'

function App() {
  // create the state to add the list
  const [items, setItems] = useState([])

  function addItems(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText]
    })
    // console.log(items) the items is an array that holds the use state value, we can use mao to iterate through it
    // console.log(setItems this one is dunction)
  }

  // delete list items
  function deleteItems(id) {
    setItems((prevItems) => {
      // console.log('i got deleted')
      return prevItems.filter((item, index) => {
        return index !== id
      })
    })
  }
  return (
    <div className='container'>
      <div className='heading'>
        <h1>Lion's To-Do List</h1>
      </div>

      <InputField onAdd={addItems} />

      {items.map((todoItems, index) => {
        return (
          <TodoList
            key={index}
            id={index}
            list={todoItems}
            checked={deleteItems}
          />
        )
      })}
    </div>
  )
}

export default App
