import './App.css'

import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import { useState,useEffect } from 'react'
import Tablet from "../Tablet/Tablet";

function App() {
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  return (
    <>
      {isTablet ? (
        <Tablet />
      ) : (
        <>
          <Sidebar />
          <Main />
        </>
      )}
    </>
  );
}

export default App
