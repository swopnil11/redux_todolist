import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <div className="TodoForm">
      {todos.map((todo)=>(
        <li className="todo-input" key={todo.id}>
          {todo.text}
          <button className="todo-btn" onClick={()=> dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </div>
  )
}

export default Todos