import {useEffect} from 'react';

const useOffSetState = (className, state, setState) => {
  const handleClick = (e) => {
    const element = document.querySelector(className);

    if (!element.contains(e.target)) {
      setState(!state);
      document.removeEventListener('click', handleClick);
    }
  };

  useEffect(() => {
    if (state) document.addEventListener('click', handleClick);
  }, [state]);
}

export default useOffSetState;
