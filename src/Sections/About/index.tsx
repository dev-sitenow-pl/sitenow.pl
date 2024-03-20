import { Section } from '../Section'
import { SectionTitle } from '../SectionTitle'
import { TargetScroll } from '../TargetScroll'


const About = () => {
  return <>
    <Section sectionClass='sec__4'>
      <TargetScroll targetId='about_me' />
      <SectionTitle>
        <span>Cześć!</span> Jestem Sebastian
      </SectionTitle>
      <div className="flex-row">
        <div className="colflex-12">
          <img className="rwd-img" src="images/sebastian.jpg" alt="" />
        </div>
      </div>
      <div className="flex-row">

        <div className="colflex-12">
          <p>
            Jako front-end developer pracuję w branży IT już od ponad 8 lat. Mam doświadczenie w pracy w agencji
            reklamowej. Dzięki temu wiem, jak wpasować się w procesy i jak realizować projekty zgodnie z oczekiwaniami
            klientów – agencji, ale także software house’ów i klientów bezpośrednich.
            <br /><br />
            W trakcie tych lat pracy stworzyłem szeroką gamę stron: od landing page'y sprzedażowych po strony dla
            kampanii promocyjnych i konkursowych, karty produktowe dla wiodących sieci sprzedażowych, aż po witryny dla
            mniejszych i większych marek. Wszystkie te projekty przyczyniły się do zgłębienia mojej wiedzy na temat
            tego, co sprawia, że strona internetowa jest skuteczna i jak najlepiej zaimplementować rozwiązania, które
            przyciągną i zainteresują odbiorców. Chociaż nie jestem grafikiem ani projektantem stron www, moje
            doświadczenie w budowaniu witryn pozwala mi na precyzyjne dobieranie i implementowanie kluczowych elementów,
            które dodają stronie wartości.
            <br /><br />
            Obecnie działam także jako freelancer – i właśnie w tej formie chętnie podejmę z Tobą współpracę.
            Pomagam budować responsywne, wspomagające pozycjonowanie, zachęcające do interakcji strony internetowe i
            landing page. Tworzę od nowa lub bazuję na tym, co już działa – moje usługi jako front-end developera
            obejmują także dostosowywanie materiałów do istniejących już systemów.
            <br /><br />
            Każda moja współpraca z klientem to indywidualny projekt. Chcę zrozumieć, czego potrzebujesz, dostosować do
            tego najlepsze rozwiązania, a w efekcie – dostarczyć Ci materiały, które idealnie wpasują się w Twoją stronę
            lub landing page. Ty dostarczasz mi niezbędne informacje, a ja w wyznaczonym terminie przekazuję Ci gotową
            pracę.
            <br /><br />
            Brzmi dobrze?
            <br />
            Skontaktuj się ze mną, a pokażę Ci, jaką wartość dodaną wniosę jako front-end developer
            freelancer do Twojego projektu!

          </p>
        </div>
      </div>
    </Section>
  </>
}

export { About };