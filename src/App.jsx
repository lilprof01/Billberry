import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun'
import './App.css'
import Header from './header'
import Hero from './hero'
import Features from './Features'
import About from './about'
import Footer from './footer'
import { icon } from '@fortawesome/fontawesome-svg-core'

function App() {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    };

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark'){
      root.classList.add('dark');
    } else{
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const btnIcon = theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />;

  return (
    <div className='bg-slate-300 dark:bg-[#212529] relative'>
      <Header />
      <Hero />
      <Features />
      <About />
      <Footer />
      <button onClick={toggleTheme} className='text-xs sm:text-lg h-8 w-8 sm:h-12 sm:w-12 fixed bottom-5 right-5 bg-slate-600 dark:bg-slate-300 text-[white] dark:text-[#212529] dark:hover:text-[white] hover:text-[black] hover:-translate-y-1 ease-in-out  toggle shadow-lg shadow-black dark:shadow-slate-400'>{btnIcon}</button>
    </div>
  )
};

export default App;
