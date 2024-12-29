import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CatImage from './Cat'
import ProfileComponent from './Person'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <CatImage />
        <ProfileComponent name="Christopher Gioia" age={32} location="Richmond, CA" />
      </div>
  )
}

export default App
