import './App.css'
import CounterPage from "./components/CounterPage.tsx";
import Navbar from './components/Navbar.tsx'
import { useCounter } from "./store/counter.ts"

function App() {
  const count = useCounter((state) => state.count)
  const increment = useCounter((state) => state.increment)

  return (
    <>
      <Navbar />
      <div className="main-content">
          <CounterPage />
      </div>
    </>
  )
}

export default App
