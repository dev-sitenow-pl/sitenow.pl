import useScrollToTarget from "../../hooks/useScrollToTarget";
import { Section } from "../../Sections/Section"
import { TargetScroll } from "../../Sections/TargetScroll"



const PromoBanner = () => {
  const handleClick = useScrollToTarget();
  return <Section sectionClass='promo__banner'>
    <TargetScroll targetId="promo_banner" />
    <h1>
      <span>🎉 TYLKO DO 30 SIERPNIA 🎉</span>
    </h1>
    <h2>
      Zyskaj <span>10% RABATU</span>!
    </h2>
    <p>
      Marzysz o profesjonalnym wizerunku w internecie? <br /> Skorzystaj z mojej oferty i wyróżnij swoją markę!
    </p>
    <ul>
      <li>✅ <strong>10% RABATU</strong> na każde zamówienie</li>
      <li>✅ Gotowy tekst na stronę</li>
      <li>✅ Treści do social media na 10 dni <br /> [Facebook, LinkedIn, Instagram]</li>
    </ul>
    <small>
      Nie czekaj — promowanie Twojej marki nigdy nie było tak łatwe i dostępne.<br />
      Oferta ważna tylko do <strong>30 sierpnia!</strong>
    </small>
    <br />
    <a className="btn green" href="#contact" onClick={handleClick}>Zarezerwuj Swoje Miejsce Teraz!</a>
  </Section>
}

export { PromoBanner }