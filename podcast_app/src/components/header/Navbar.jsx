import { useState } from 'react';
import './Navbar.css';

export default function Navbar () {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
    setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <a href="#" className="navbar-brand">My Website</a>
            <div className={`navbar-toggle ${showMenu ? 'change' : ''}`} onClick={toggleMenu}>
                <div className="navbar-menu-icon"></div>
                <div className="navbar-menu-icon"></div>
                <div className="navbar-menu-icon"></div>
            </div>
            <ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
                <li className="navbar-item"><a href="#">Home</a></li>
                <li className="navbar-item"><a href="#">About</a></li>
                <li className="navbar-item"><a href="#">Sign Out</a></li>
            </ul>
        </nav>
    );
}
    

