

import { Section } from '../../Sections/Section';
import { SectionTitle } from '../../Sections/SectionTitle';


const CookiePolicy = () => {
  return <>
    <Section sectionClass='policy-box'>
      <SectionTitle>
        Polityka <span>plików Cookies</span>
      </SectionTitle>
      <div className="flex-row">
        <div className="colflex-12">
          <h5>Czym są pliki Cookies?</h5>

          Pliki Cookies to małe pliki tekstowe przechowywane na Twoim urządzeniu (komputerze, tablecie, smartfonie), które są używane przez strony internetowe, aby poprawić Twoje doświadczenie jako użytkownika.
          <h5>Jakie pliki Cookies wykorzystujemy?</h5>

          Na naszej stronie internetowej używane są dwa główne rodzaje plików Cookies:
          <ol>
            <li>
              <strong>Pliki analityczne:</strong>
              <br />
              Te pliki pomagają nam zrozumieć, w jaki sposób użytkownicy korzystają z naszej strony. Wykorzystujemy narzędzie Google Analytics, aby analizować ruch na stronie, co pozwala nam lepiej dostosować zawartość i usługi do potrzeb użytkowników.
            </li>
            <li>
              <strong>Pliki Cookies zintegrowanego chatu:</strong>
              <br />
              Te pliki są niezbędne do działania narzędzia chatu, które umożliwia bezpośrednią komunikację z naszym zespołem obsługi klienta.
            </li>
          </ol>




          <h5>W jakim celu używamy plików Cookies?</h5>

          Pliki analityczne są wykorzystywane w celu:
          <ul>
            <li> Analizy ruchu na stronie, co pozwala nam lepiej rozumieć, jak użytkownicy korzystają z naszej strony oraz które jej elementy są najbardziej popularne.
              .</li>
            <li>Poprawy funkcjonalności strony oraz optymalizacji naszych usług</li>
          </ul>


          Pliki Cookies chatu są wykorzystywane w celu:
          <ul>
            <li>Umożliwienia użytkownikom łatwego i szybkiego kontaktu z naszym zespołem obsługi klienta.</li>
          </ul>


          <h5>Informacje o stronach trzecich</h5>

          W ramach analizy ruchu na stronie, korzystamy z usług zewnętrznego dostawcy – Google Analytics, który również umieszcza swoje pliki Cookies na Twoim urządzeniu.
          <h5>Zgoda użytkownika</h5>

          Podczas pierwszej wizyty na naszej stronie, na Twoim urządzeniu zostanie przechowywany plik w localstorage, zawierający informacje o zgodzie na używanie plików Cookies. Kontynuowanie korzystania z naszej strony jest równoznaczne ze zgodą na ich użycie.
          <h5>Zarządzanie plikami Cookies</h5>

          Możesz w dowolnym momencie zarządzać ustawieniami plików Cookies poprzez ustawienia swojej przeglądarki internetowej. Większość przeglądarek pozwala na kontrolowanie plików Cookies, w tym ich blokowanie oraz usuwanie.
          <h5>Kontakt</h5>

          Jeśli masz pytania dotyczące naszej polityki plików Cookies, prosimy o kontakt pod adresem e-mail: <a href="mailto:biuro@sitenow.pl" title="Wyślij wiadomość do sitenow.pl">biuro@sitenow.pl</a>.
          <h5>Aktualizacje</h5>

          Polityka plików Cookies może być okresowo aktualizowana w celu zachowania zgodności z obowiązującymi przepisami oraz dostosowania jej do zmian technologicznych.
          <h5>Podsumowanie</h5>

          Korzystając z naszej strony, zgadzasz się na naszą politykę plików Cookies. Jeśli nie zgadzasz się na używanie plików Cookies, zalecamy zmianę ustawień przeglądarki lub zaprzestanie korzystania z naszej strony.

          <h6>Data ostatniej aktualizacji: 16.07.2024r.</h6>
        </div>
      </div>
    </Section>


  </>;
}

export { CookiePolicy };