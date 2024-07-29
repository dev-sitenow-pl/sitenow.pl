import { useCallback } from 'react';

const useScrollToTarget = () => {
  const handleClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (event.currentTarget.getAttribute('href') ?? '').trim();
    console.log(href.startsWith('#'));
    if (href.startsWith('#')) {
      event.preventDefault();
      const target = document.querySelector(href);
      console.log(target);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);


  return handleClick;
};

export default useScrollToTarget;
