import { useState, useEffect } from 'react';

import { LiMenu } from '../ListMenu'
import { MenuBtnMobile } from '../MenuBtnMobile'
import { Logo } from '../../Logo'

import MenuItems from '../../data/Menu.json';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {

        if (isOpen) {
          document.body.classList.add('open-menu');
        } else {
          document.body.classList.remove('open-menu');
        }
      } else {
        document.body.classList.remove('open-menu');
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    if (window.innerWidth < 992) {
      setIsOpen(prevState => !prevState);
    }
  };

  const smoothScrollForTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    let target = document.querySelector('#start');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return <>
    <nav className="menu">
      <div className="brand__svg-logo">
        <a href="#start" onClick={smoothScrollForTop}>
          <Logo />
        </a>
      </div>
      <MenuBtnMobile handleMenuToggle={handleMenuToggle} />
      <div className='menu-box-list'>
        <ul className="ul">
          {MenuItems.map(menuItem => (
            <LiMenu element={menuItem} handleMenuToggle={handleMenuToggle} />
          ))}
        </ul>
      </div>
    </nav>
  </>
}

export { Menu };