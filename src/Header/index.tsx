import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Menu } from './Menu'

import './Header.scss'

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const navHeader = useRef(null);

  useEffect(() => {
    const tl_menu = gsap.timeline();
    if (navHeader.current) {
      tl_menu
        .to(navHeader.current, {
          scrollTrigger: {
            trigger: "main",
            start: "100px 0"
          },
        })
        .to(navHeader.current, {
          duration: .5,
          scrollTrigger: {
            trigger: "main",
            start: "101px 0",
            toggleClass: "scrollingPage"
          },
        })
    }
  }, [navHeader]);
  return <>
    <header className="nav-box" id="nav-header" ref={navHeader}>
      <Menu />
    </header>
  </>
}

export { Header };