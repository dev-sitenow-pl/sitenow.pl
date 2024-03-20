import { useState } from 'react'

import { FAQTabsItem } from './FAQTabsItem'

const FAQItems = [
  {
    IDTab: 'ID1',
    question: 'W czym pomoże mi front-end developer?',
    answer: 'Jako front-end developer pomogę Ci w zaprojektowaniu <br>i wykonaniu interakcji na Twojej stronie. Dzięki temu będzie ona bardziej atrakcyjna, zrozumiała dla użytkownika, a to zachęci go do działania.<br /> Przygotowuję materiały internetowe takie jak np. landing page, w oparciu między innymi o HTML, CSS, JavaScript.'
  },
  {
    IDTab: 'ID2',
    question: 'Po co mi ten cały front-end? Przecież mam w zespole programistę/web designera/grafika.',
    answer: 'Programista czy web designer odpowiadają za stworzenie strony pod kątem technicznym. Frontendowiec jest odpowiedzialny za inny obszar – wizualną stronę projektu. Tworzę animacje, przekształcenia, a także zajmuję się rzeczami, które mogą wydawać się prozaiczne (choć wcale takie nie są): doborem kolorów tła czy wielkości fontów.'
  },
  {
    IDTab: 'ID3',
    question: 'Na jakim etapie projektu zatrudnić front-end developera?',
    answer: 'Najkorzystniej zrobić to w momencie projektowania samego pomysłu np. na landing page. Dzięki temu możemy wprowadzić jak najwięcej rozwiązań i zadbać o to, by były spójne z całym projektem. Zdarza się również, że dostaję zlecenia już po akceptacji projektu i wówczas od razu przystępuję do realizacji.'
  },
  {
    IDTab: 'ID4',
    question: 'Jak praca frontendowca przekłada się na pozycjonowanie strony?',
    answer: 'Podczas pracy frontendowca odpowiednio wykorzystuję znaczniki semantyczne. To fragmenty kodu, które <br> – przy umiejętnym zastosowaniu – korzystnie wpływają na pozycjonowanie strony. Nie jest to oczywiście jedyna czynność, jaką należy wykonać, aby znaleźć się wysoko w wynikach wyszukiwania. Działania front-end developera są jednak niezbędnym fundamentem w procesie pozycjonowania.'
  },
  {
    IDTab: 'ID5',
    question: 'Czym różni się front-end developer od web designera?',
    answer: 'Role obu specjalistów w procesie tworzenia strony są różne. Front-end developer buduje strony internetowe lub aplikacje za pomocą HTML, CSS, JS lub stworzonych do tego frameworków. Web designer jest odpowiedzialny za inną część procesu – za projekt graficzny. Ich działania wzajemnie się uzupełniają, jednak praca web designera nie wystarczy do stworzenia działającej strony internetowej.'
  },
  {
    IDTab: 'ID6',
    question: 'Z kim współpracujesz jako frontendowiec w projekcie?',
    answer: 'Współpracuję z grupą osób odpowiedzialnych za konkretny projekt – skład takiej grupy może być różny w zależności od sposobu pracy klienta. Najczęściej jest to grafik oraz account manager projektu. Czasem też jest to inny programista.'
  },
  {
    IDTab: 'ID7',
    question: 'Jak tworzysz strony? Czy korzystasz z Wordpressa?',
    answer: 'W swojej pracy używam HTML, CSS, JavaScript oraz różnych bibliotek lub frameworków stworzonych do budowania stron internetowych. Frameworki, takie jak jak Bootstrap 3/4/5, GSAP, JQuery, pozwalają mi na zapewnienie szybkiego tempa pracy, dzięki nim mogę także korzystać ze sprawdzonych, pozbawionych błędów rozwiązań.<br> W swoim portfolio mam również strony przygotowane na popularnym systemie zarządzania Wordpress.'
  },
  {
    IDTab: 'ID8',
    question: 'Czy masz prace/portfolio, którymi możesz się pochwalić?',
    answer: 'Tak, moje aktualne portfolio możesz obejrzeć tutaj. <br>Grafiki wykorzystane do tej strony pochodzą z moich projektów, w których odpowiedzialny byłem za stronę frontendową.'
  },
  {
    IDTab: 'ID9',
    question: 'Czego potrzebujesz (jakich materiałów), byśmy mogli zacząć współpracę?',
    answer: ' Moje podejście do współpracy jest dwutorowe. W zależności od zaawansowania prac u klienta, możemy umówić się na realizację gotowego projektu lub na pracę na podstawie pomysłu. Z tego powodu odpowiedź muszę podzielić na dwie części: <br> 1. W pierwszym przypadku podstawą do rozpoczęcia pracy jest zaakceptowany projekt graficzny,<br> 2. w drugim zaś, jeśli klient dysponuje jedynie pomysłem, a realizacja projektu jeszcze się nie rozpoczęła, mogę wesprzeć zespół od strony technicznej. Wówczas na początku nie potrzebuję gotowego projektu graficznego.'
  },
  {
    IDTab: 'ID10',
    question: 'Czym różnisz się od przeciętnego junior front-end developera?',
    answer: 'Ilością napisanego kodu, niezliczonych rozwiązanych problemów oraz doświadczeniem płynącym z wielu lat pracy. To zasoby, których nie ma nikt, kto dopiero wchodzi na rynek front-end developerski!'
  },
  {
    IDTab: 'ID11',
    question: 'W jaki sposób się rozliczasz?',
    answer: 'Wystawiam faktury – to ułatwia proces formalności obu stronom.'
  },
  {
    IDTab: 'ID12',
    question: 'Jak wygląda współpraca z Tobą? Jak możemy się komunikować w trakcie trwania projektu?',
    answer: ' Współpraca zależy od okoliczności. Czasem wykonuje pojedyncze prace np. stworzenie Landing Page na podstawie gotowego projektu graficznego z opisanymi wcześniej animacjami. Innym razem może to być dłuższa współpraca, przy której pomagam również w strefie technicznej. Komunikacja z mną jest prosta – możemy rozmawiać za pomocą telefonu, maila czy Whatsapp. Jestem dostępny zarówno w trakcie trwania projektu, jak i po jego zakończeniu. Pomagam w kwestiach technicznych, odpowiadam na reklamację, chętnie porozmawiam także na temat nowych zadań.'
  },
  {
    IDTab: 'ID13',
    question: 'Z jakimi klientami najczęściej współpracujesz?',
    answer: 'Moimi klientami są najczęściej agencje reklamowe i software house’y. Współpracuję także bezpośrednio z przedsiębiorcami, oferuję również wsparcie <br class="md">z zakresu front-endu programistom i grafikom.'
  }
]

const FAQTabs = () => {
  const [openTab, setOpenTab] = useState('ID1');

  const handleTabClick = (tabId: string) => {
    setOpenTab(tabId);
  };

  return <div className="faq__main-box">
    <div className="flex-row">
      <div className="colflex-12">

        {FAQItems.map((TabItem) => (
          <FAQTabsItem
            key={TabItem.IDTab}
            FAQTabsData={TabItem}
            isOpen={openTab === TabItem.IDTab}
            handleTabClick={handleTabClick}
          />
        ))
        }
      </div>
    </div>
  </div>
}

export { FAQTabs };