import React from 'react'
import { useState } from 'react'

function InputField(props) {
  // start with the input component
  const [inputText, setInputText] = useState('')

  function handleChange(event) {
    const newText = event.target.value
    setInputText(newText)
  }
  return (
    <div className='form'>
      <input type='text' onChange={handleChange} value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText)
          setInputText('')
        }}
      >
        <span>Add</span>
      </button>
    </div>
  )
}

export default InputField
