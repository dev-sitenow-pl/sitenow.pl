import useScrollToTarget from "../../hooks/useScrollToTarget"

import './CTABtns.scss'

const CTABtns = () => {
  const handleClick = useScrollToTarget();

  return (
    <>
      <a href="#contact" className="btn btn__cta btn__cta__mail" onClick={handleClick}>Napisz do mnie</a>
      <a href="tel:+48535606164" className="btn btn__cta btn__cta__tele">Zadzwoń do mnie</a>
    </>
  );
}

export { CTABtns }