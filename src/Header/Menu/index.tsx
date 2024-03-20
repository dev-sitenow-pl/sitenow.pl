import { useState, useEffect } from 'react';

import { LiMenu } from '../ListMenu'
import { MenuBtnMobile } from '../MenuBtnMobile'
import { Logo } from '../../Logo'

const MenuItems = [
  {
    scrollTarget: '#offer',
    iconName: 'storefront',
    liItemName: 'Oferta'
  },
  {
    scrollTarget: '#about_me',
    iconName: 'accessibility_new',
    liItemName: 'Poznaj mnie'
  },
  {
    scrollTarget: '#opinions',
    iconName: 'reviews',
    liItemName: 'Opinie'
  },
  {
    scrollTarget: '#faq',
    iconName: 'quiz',
    liItemName: 'FAQ'
  },
  {
    scrollTarget: 'tel:+48535606164',
    iconName: 'smartphone',
    liItemName: 'Telefon',
    liClassName: 'mobile-btn'
  },
  {
    scrollTarget: 'mailto:biuro@sitenow.pl',
    iconName: 'mail',
    liItemName: 'Napisz do mnie',
    liClassName: 'mobile-btn'
  },
  {
    scrollTarget: '#contact',
    iconName: 'support_agent',
    liItemName: 'Kontakt'
  }
]

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('open-menu');
    } else {
      document.body.classList.remove('open-menu');
    }

    return () => {
      document.body.classList.remove('open-menu');
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen(prevState => !prevState);
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