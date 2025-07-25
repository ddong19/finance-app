import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
        </div>
    </nav>
}

export default NavBar