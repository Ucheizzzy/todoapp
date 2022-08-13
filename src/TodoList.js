import React from 'react'

function TodoList(props) {
  function deleting() {
    props.checked(props.id)
  }
  return (
    <div>
      <ul>
        <li onClick={deleting}>
          {props.list}
          <span style={{ color: 'red', marginLeft: '50px', cursor: 'pointer' }}>
            Delete
          </span>
        </li>
      </ul>
    </div>
  )
}

export default TodoList
