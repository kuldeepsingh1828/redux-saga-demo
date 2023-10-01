import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction } from './redux/actions/todoActions'

function App() {
  const [todo, setTodo] = useState('');
  const state = useSelector(state => state)
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodoAction(todo))
  }

  const doAsynTask = () => {
    dispatch({ type: 'GET_USERS' })
  }
  return (
    <>
      <h2>Redux saga implementation Demo</h2>
      <div>
        <input value={todo} onChange={(e) => { setTodo(e.target.value) }} />
        <button onClick={addTodoHandler}>+</button>
        {state.todos.map((todo, index) => {
          return <div key={index}>{todo}</div>
        })}
        <hr />
        <button onClick={doAsynTask}>Do Asyn Task</button>
        <div>{state?.users && JSON.stringify(state?.users)}</div>
      </div>
    </>
  )
}

export default App
