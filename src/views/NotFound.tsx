import { Section } from "../Sections/Section";
import { SectionTitle } from "../Sections/SectionTitle";

const NotFound = () => {
  return <>
    <Section>
      <SectionTitle>
        O nie! <span>Chyba zabłądziłeś!</span>
      </SectionTitle>
      <div className="flex-row">
        <div className="colflex-12">

          Chodź, wrócimy w <a href="/">dobre miejsce</a>
        </div></div>
    </Section>
  </>
}

export { NotFound };