import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/contact');
    }, 2000);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/About');
    }, 2000);
  };

  const handleFramesClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/Furry-Frames');
    }, 2000);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    let scrollTimeout = null;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setHeaderVisible(true);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <img src={require('../../Assets/Images/Breads Gallery/Logo.png')} alt="Loading Logo" className="logo-spin" />
        </div>
      )}
      {!loading && (
        <header className={`header ${headerVisible ? '' : 'hidden'}`}>
          <div className='wrapper'>
            <div className="logo">
              <img src={require('../../Assets/Images/Breads Gallery/Logo.png')} alt="Logo" />
            </div>
            <div className='name'>
              <h1 className='orange'>Naadinte</h1>
              <h1>Paws</h1>
              <img src={require('../../Assets/Images/Breads Gallery/8.png')} alt="dog-logo" width={"100px"} />
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
            <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li><NavLink exact="true" to="/">Home</NavLink></li>
                <li><NavLink to="/about" onClick={handleAboutClick}>About</NavLink></li>
                <li><NavLink to="/contact" onClick={handleContactClick}>Contact</NavLink></li>
                <li><NavLink to="/Furry-Frames" onClick={handleFramesClick}>Adopt</NavLink></li>
                <li><button className="register">Register</button></li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
