import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useScrollToTarget from "../../hooks/useScrollToTarget";

import '../PromoSierpien.scss'

gsap.registerPlugin(ScrollTrigger);

const PromoHero = () => {
  const handleClick = useScrollToTarget();
  const promoHero = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (promoHero.current) {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 530px)", () => {
        ScrollTrigger.create({

          trigger: document.body,
          start: "15px top",
          onEnter: () => {
            promoHero.current?.classList.add('promo__show');
          }
        });
      });
      mm.add("(max-width: 529px)", () => {
        ScrollTrigger.create({

          trigger: '.banner-box-txt__cta',
          start: "top center",
          onEnter: () => {
            promoHero.current?.classList.add('promo__show');
          }
        });
      });
    }

  }, []);
  return <>
    <div className="promo__hero" ref={promoHero}>
      <div className="promo__hero__text">
        <strong>Chcesz wyróżnić swoją markę?</strong> Skorzystaj z wyjątkowej promocji trwającej do <strong>30 sierpnia !</strong><br /> Oferuję 10% rabatu na każde zamówienie oraz dodatkowe pakiety treści. <br />Czas na sukces w sieci!
      </div>
      <a href="#promo_banner" onClick={handleClick} className="btn green">Dowiedz się więcej o promocji</a>

    </div>

  </>
}

export { PromoHero }