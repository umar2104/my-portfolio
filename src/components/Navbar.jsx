import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const navRef = useRef(null);

  // Load theme from localStorage and initialize scroll state on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Check initial scroll position
    setScrolled(window.scrollY > 50);

    // GSAP animation - only run on mount
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []); // Empty dependency array ensures this runs only once on mount

  // Handle scroll effect separately
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleHover = (e) => {
    gsap.to(e.target, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
  };

  const handleHoverOut = (e) => {
    gsap.to(e.target, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="#home">My Portfolio</a>
      </div>
      <ul className="nav-links">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="theme-toggle">
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Toggle theme"
        >
          <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;