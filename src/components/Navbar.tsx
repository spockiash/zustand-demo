import { useNavbar } from "../store/navbar.ts";

export default function Navbar() {
    const isOpen = useNavbar((state) => state.isOpen)
    const toggle = useNavbar((state) => state.toggle)

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
                <li><a href="#">Counter</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            )}
        </nav>
  )
}