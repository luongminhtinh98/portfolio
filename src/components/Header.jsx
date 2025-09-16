import { useState, useEffect } from 'react';
import { BiMoon, BiSun } from "react-icons/bi";
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  document.body.classList.toggle('light-theme', newTheme === 'light');
  document.body.classList.toggle('dark-theme', newTheme === 'dark');
  localStorage.setItem('selected-theme', newTheme);
};

useEffect(() => {
  const selectedTheme = localStorage.getItem('selected-theme');
  if (selectedTheme) {
    setTheme(selectedTheme);
    document.body.classList.toggle('light-theme', selectedTheme === 'light');
    document.body.classList.toggle('dark-theme', selectedTheme === 'dark');
  }
}, []);

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);
  
  return (
    <div>
      <header id='header' className='header'>
        <div className="container grid header__container">
          <a href="#" className="nav-logo" onClick={() => navigate('/')}>MINH TINH</a>
          <div className='flex items-center justify-between'>
          {/* <span className='mx-2 rounded-full bg-slate-300' style={{width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center'}}> T </span> */}
          <Button 
            style={{
              backgroundColor: '#606EBE'}} 
            type="primary"
            onClick={() => navigate('/signin')}
            >
            Sign in</Button>
          <Button
            className='mx-2 button-signup'
            onClick={() => navigate('/register')}
          >
              Sign up
          </Button>
            <span>{theme === 'light' ? (
              <BiMoon className='change-theme' id="theme-button" onClick={toggleTheme} />
            ) : (
              <BiSun className='change-theme' id="theme-button" onClick={toggleTheme} />
            )}</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
