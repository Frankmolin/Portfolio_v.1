import { useEffect, useState } from 'react'
import { ThreeCube } from './ThreeCube'
import DarkModeToggle from "react-dark-mode-toggle";
import getRandomPastelColor from '../utils/randColor';
import isMobile from 'is-mobile';

export default function Header() {
  const isMobileDevice = isMobile();

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);

  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
      <div className='right-7 top-7 absolute z-10'>
        <DarkModeToggle
          onChange={handleDarkModeToggle}
          checked={darkMode}
          size={80}
        />
      </div>
      <div className='overflow-hidden min-h-screen grid grid-cols-1 grid-rows-1 sm:grid-rows-1 sm:grid-cols-2 w-full place-items-center gap-1'>
        <div className='w-full px-10 sm:w-2/3 h-full flex max-w-lg items-center'>

          <div className=' relative'>
            <div style={{ backgroundColor: getRandomPastelColor() }} className='blob  -top-20 -left-9 '></div>
            <div style={{ backgroundColor: getRandomPastelColor(), animationDelay: '2s' }} className='blob animation-delay-2000  top-0 -right-4 '></div>
            <div style={{ backgroundColor: getRandomPastelColor(), animationDelay: '4s' }} className='w-32 h-32 blob animation-delay-4000  top-1/2 -left-8  '></div>
            <div className='relative z-10'>

              <h1 className='text-4xl sm:text-7xl font-bold'>Soy Franco Molina Jensen</h1>
              <p className='text-xl sm:text-xl '>Desarrollador de software</p>
            </div>
          </div>

        </div>
        <div className='w-full hidden sm:block h-full'>
          {!isMobileDevice&&<ThreeCube />}
        </div>
      </div>
    </>
  )
}
