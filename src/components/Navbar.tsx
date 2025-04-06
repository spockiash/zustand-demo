import { stat } from "node:fs";
import { useNavbar } from "../store/navbar.ts";
import { navigationStore } from "../store/navigation.ts";
import { useStore } from 'zustand'

export default function Navbar() {
    const isOpen = useNavbar((state) => state.isOpen)
    const toggle = useNavbar((state) => state.toggle)
    // usage of useStore when dealing with stores created with createStore
    const currentPage = useStore(navigationStore, (state) => state.currentPage)
    const navigate = useStore(navigationStore, (state) => state.navigate)

    return (
        <nav className={`navbar ${isOpen ? 'open' : 'collapsed'}`}>
            <div className="navbar-header">
                <h2 className="navbar-title">My App</h2>
                <button type="button" onClick={toggle}>
                {isOpen ? '<<<' : '>>>'}
                </button>
            </div>

            {isOpen && (
                <ul className="navbar-menu">
                <li><a href="#" onClick={() => navigate('counter')}>Counter</a></li>
                <li><a href="#" onClick={() => navigate('compare')}>Zustand vs</a></li>
                </ul>
            )}
        </nav>
  )
}