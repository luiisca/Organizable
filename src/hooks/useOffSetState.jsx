import {useEffect, useCallback} from 'react';

const useOffSetState = (className, state, setState) => {
  const handleClick = useCallback((e) => {
    const element = document.querySelector(className);

    if (!element.contains(e.target)) {
      setState(false);
    }
  }, []);

  useEffect(() => {
    if (state) {
      document.addEventListener('click', handleClick);
    } else {
      console.log('removing event listener');
      document.removeEventListener('click', handleClick);
    }
  }, [state]);
}

export default useOffSetState;
