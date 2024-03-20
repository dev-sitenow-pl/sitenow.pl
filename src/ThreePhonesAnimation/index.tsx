import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ThreePhonesAnimation.scss'

gsap.registerPlugin(ScrollTrigger);

const ThreePhonesAnimation = () => {
  const phonesBody1 = useRef(null);
  const phonesBody2 = useRef(null);

  const insidePhone1 = useRef(null);
  const insidePhone2 = useRef(null);
  const insidePhone3 = useRef(null);

  useEffect(() => {
    // Sprawdzamy czy elementy są dostępne
    if (phonesBody1.current && phonesBody2.current && insidePhone1.current && insidePhone2.current && insidePhone3.current) {

      gsap.fromTo(phonesBody1.current, {
        transform: 'translateX(100%) rotate(0deg)'
      }, {
        transform: 'translateX(30%) rotate(-15deg)',
        delay: 1,
        ease: 'Elastic.easeOut(.5)',
        scrollTrigger: {
          trigger: ".sec__1",
        }
      });

      gsap.fromTo(phonesBody2.current, {
        transform: 'translateX(-100%) rotate(0deg)'
      }, {
        transform: 'translateX(-30%) rotate(15deg)',
        duration: 1.5,
        ease: 'Elastic.easeOut(.5)',
        delay: 2,
        scrollTrigger: {
          trigger: ".sec__1",
        }
      });

      gsap.fromTo(insidePhone1.current, {
        transform: 'translateY(0)'
      }, {
        transform: 'translateY(-30%)',
        ease: 'Elastic.easeOut(.9)',
        scrollTrigger: {
          start: 'top top',
          scrub: 2,
        }
      });

      gsap.to(insidePhone2.current, {
        translateY: '-60%',
        duration: 25,
        delay: 3,
        ease: 'Elastic.easeOut(.25)',
        repeat: -1,
        yoyo: true
      });

      gsap.fromTo(insidePhone3.current, {
        transform: 'translateY(-50%)'
      }, {
        transform: 'translateY(-70%)',
        scrollTrigger: {
          trigger: ".sec__1",
          start: '200px 200px',
          end: '+=800',
          scrub: 1,
        }
      });
    }

  }, []);

  return (
    <div className="phones-anim">
      <div className="phone-box" ref={phonesBody1}>
        <img className="phone-body" src="images/phone.png" alt="" />
        <div className="phone-box-visibility-area">
          <img ref={insidePhone1} className="inside-phone" src="images/pokaz.png" alt="" />
        </div>
      </div>

      <div className="phone-box">
        <img className="phone-body" src="images/phone.png" alt="" />
        <div className="phone-box-visibility-area">
          <img ref={insidePhone2} className="inside-phone" src="images/pokaz.png" alt="" />
        </div>
      </div>

      <div className="phone-box" ref={phonesBody2}>
        <img className="phone-body" src="images/phone.png" alt="" />
        <div className="phone-box-visibility-area">
          <img ref={insidePhone3} className="inside-phone" src="images/pokaz.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export { ThreePhonesAnimation };
