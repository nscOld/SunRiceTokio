import { IoSunnyOutline, IoCloudyNightOutline, IoSearchOutline, IoLayersOutline } from 'react-icons/io5';
import { useThemeContext } from '../../contexts/ThemeContext';
import { SearchContext } from '../../contexts/SearchContext';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import './styles.css';
import GoogleAuth from '..//..//backend/auth';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
  
    <button id="theme-button" onClick={() => toggleTheme()}>
      {theme === "dark" ? (
        <IoSunnyOutline
          className="icon"
          color='white'
          
        />
      ) : (
        <IoCloudyNightOutline
          className="icon"
          color='white'
          
        />
      )}
    </button>
    
  );
};

const NavBar = () => {
  const [displayValue, setDisplayValue] = useState<string | undefined>("");
  const { setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayValue) return;

    setSearch(displayValue);
    setDisplayValue("");
    navigate("/");
  };

  return (
    <nav id="navbar">
      <ul className="navbar-links">
        <h2 id="logo">
          <Link to="/">
            <img src="/image/logo2.svg" alt="qwe" width={180}  />
          </Link>
        </h2>
        <GoogleAuth/>
        <li className="navbar-item">
          <ThemeSwitcher />
        </li>
      </ul>

     
      
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search  (* ^ ω ^)"
          onChange={(e) => setDisplayValue(e.target.value)}
          value={displayValue}
        />
        
        <button type="submit" className='btn'>
          <IoSearchOutline color='white'  />
        </button>
        
      </form>
  
    </nav>
  );
};

export default NavBar;
