import { useState } from 'react'
import { motion } from "framer-motion"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./sidebar.css";
import links from "./data"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React Sidebar</h1>
        <h2>Framer Motion</h2>
      </div>
    </>
  )
}

export default App
