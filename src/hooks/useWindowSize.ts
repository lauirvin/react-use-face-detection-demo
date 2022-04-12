import { useEffect, useState } from 'react';

const getSize = () => ({
  innerHeight: window.innerHeight,
  innerWidth: window.innerWidth,
  outerHeight: window.outerHeight,
  outerWidth: window.outerWidth,
});

const useWindowSize = (): ReturnType<typeof getSize> => {
  const [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
