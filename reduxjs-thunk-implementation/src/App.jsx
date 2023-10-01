import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllUsers } from './redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users);

  const getAllUser = () => {
    dispatch(getAllUsers()).unwrap()
      .then((originalPromiseResult) => {
        // handle result here
        console.log("RESOLVED>>>")
      })
      .catch((rejectedValueOrSerializedError) => {
        // handle error here
        console.log("ERROR")
      })
  }
  return (
    <>
      <div>
        <button onClick={getAllUser}>Get All Users</button>
        {users.map((user) => {
          return <>
            <div>{JSON.stringify(user)}</div>
          </>
        })}

      </div>
    </>
  )
}

export default App
