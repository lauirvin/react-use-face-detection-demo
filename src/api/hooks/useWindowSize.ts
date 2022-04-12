import { useState, useEffect } from 'react';

interface ReturnType {
  innerHeight: number;
  innerWidth: number;
  outerHeight: number;
  outerWidth: number;
}

const getSize = () => ({
  innerHeight: window.innerHeight,
  innerWidth: window.innerWidth,
  outerHeight: window.outerHeight,
  outerWidth: window.outerWidth,
});

const useWindowSize = (): ReturnType => {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize());

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
