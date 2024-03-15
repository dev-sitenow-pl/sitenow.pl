import { Section } from '../Section'
import { SectionTitle } from '../SectionTitle'
import { TargetScroll } from '../TargetScroll'

import { ThreePhonesAnimation } from '../../ThreePhonesAnimation'

const Offer = () => {
  return <>
    <Section sectionClass='sec__1'>
      <TargetScroll targetId='offer' />
      <SectionTitle>
        Jako <span>front-end developer</span> ożywię Twoją stronę.
        <small>Jak to zrobię?</small>
      </SectionTitle>
      <div className="flex-row">
        <div className="colflex-5">
          <ThreePhonesAnimation />
        </div>
        <div className="colflex-7">
          Zakoduję Twoje materiały:<br />
          <strong>stronę internetową, landing page, stronę konkursową, karty produktów.</strong> Stworzę żywe,
          przyciągające wzrok <strong>bannery do kampanii reklamowych <br className="md" />i animacje</strong>.
          Wszystko, co
          dla Ciebie przygotuję, będzie
          responsywne – idealnie zadziała na różnych urządzeniach.
          <br />
          <br />
          Moje materiały będą łatwe do zaimplementowania w
          popularnych sieciach sprzedażowych. Zrobię to wszystko w wyznaczonym terminie i zawsze będę pod ręką, by
          wytłumaczyć Ci zawiłe kwestie ze świata front-endu.
          <br />
          <br />
          Szukasz właśnie kogoś takiego?<br />
          Świetnie!<br /> Cieszę się, że możemy razem pracować!
        </div>
      </div>
    </Section>
  </>
}

export { Offer };