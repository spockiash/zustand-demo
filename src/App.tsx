import './App.css'
// @deno-types="@types/react"
import { useState } from 'react'
// @ts-expect-error Unable to infer type at the moment
import reactLogo from './assets/react.svg'
import { useCounter } from "./store/counter.ts"
import Navbar from "./components/Navbar.tsx"


function App() {
  const count = useCounter((state) => state.count)
  const increment = useCounter((state) => state.increment)

  
  return (
    <>
      <Navbar />
      <h1>Zustand Demo</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}
export default App
