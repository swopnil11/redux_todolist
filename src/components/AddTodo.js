import {React,useState} from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <form className="TodoForm" onSubmit={addTodoHandler}>
            <input type="text" className ="todo-input" placeholder="What is the task today?" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}

export default AddTodo