import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>COUNT: {count}</p>
        <button onClick={()=> setCount(count++)}>count</button>
       </div>
    </>
  )
}

export default App
