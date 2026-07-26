import { useState } from 'react';
import { Link } from 'react-router-dom';
import { characters, characterGroups } from '../data/characters';
import logo from '../assets/logo.svg';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Group characters by their group
  const groupedCharacters = {
    go: characters.filter(c => c.group === 'go'),
    gp: characters.filter(c => c.group === 'gp'),
    mo: characters.filter(c => c.group === 'mo'),
    mp: characters.filter(c => c.group === 'mp')
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="PhilCompass" className="logo-icon" />
          <span className="logo-text">PhilCompass</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>

          <div className="nav-dropdown">
            <button className="nav-link dropdown-trigger">
              Characters
              <svg className="dropdown-arrow" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            <div className="dropdown-content">
              {Object.entries(groupedCharacters).map(([groupKey, groupChars]) => (
                <div key={groupKey} className="dropdown-group">
                  <div
                    className="dropdown-group-title"
                    style={{ borderLeftColor: characterGroups[groupKey].color }}
                  >
                    {characterGroups[groupKey].name}
                  </div>
                  {groupChars.map(char => (
                    <Link
                      key={char.id}
                      to={`/character/${char.id}`}
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      <span className="dropdown-item-code">{char.code}</span>
                      {char.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Link to="/test" className="nav-link nav-cta" onClick={closeMenu}>
            Take the Test
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
