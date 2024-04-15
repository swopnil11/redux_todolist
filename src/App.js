import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
// const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div >
  )
}
