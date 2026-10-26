
import { useState } from "react";

function NavBar({ isDark, toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <nav className="navbar">
            <a href="#home" className="navbar-logo" onClick={closeMenu}>
                FA.
            </a>

            <button
                className="navbar-menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <div
                className={`navbar-links ${menuOpen ? "navbar-links-open" : ""
                    }`}
            >
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {isDark ? "☀️ Light" : "🌙 Dark"}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
