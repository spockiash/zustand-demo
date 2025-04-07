import './App.css'
import CounterPage from "./components/CounterPage.tsx";
import Navbar from './components/Navbar.tsx'
import ComparisonPage from './components/ComparisonPage.tsx'
import PersonCardPage from './components/person-info/PersonCardPage.tsx'
import { navigationStore } from "./store/navigation.ts";
import { useCounter } from "./store/counter.ts"
import { useStore } from "zustand";

function App() {
  const count = useCounter((state) => state.count)
  const increment = useCounter((state) => state.increment)
  const currentPage = useStore(navigationStore, (state) => state.currentPage)
  
  const renderPage = () => {
    switch (currentPage) {
      case 'counter':
        return <CounterPage />
      case 'compare':
        return <ComparisonPage />
      case 'person':
        return <PersonCardPage />
      default:
        return <CounterPage />
    }
  }

  return (
    <>
      <Navbar />
      <div className="main-content">
        {renderPage()}
      </div>
    </>
  )
}

export default App
