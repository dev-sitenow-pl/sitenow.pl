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
  return <>
    <nav className="menu">
      <div className="brand__svg-logo">
        <a href="#start">
          <Logo />
        </a>
      </div>
      <MenuBtnMobile />
      <div className="menu-box-list">
        <ul className="ul">
          {MenuItems.map(menuItem => (
            <LiMenu element={menuItem} />
          ))}
        </ul>
      </div>
    </nav>
  </>
}

export { Menu };