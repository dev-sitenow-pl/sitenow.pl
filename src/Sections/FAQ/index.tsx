import { Section } from '../Section'
import { SectionTitle } from '../SectionTitle'
import { TargetScroll } from '../TargetScroll'

const FAQ = () => {
  return <>
    <Section sectionClass='sec__6'>
      <TargetScroll targetId='faq' />
      <SectionTitle>
        Pierwsze <span>pytania i odpowiedzi</span>
      </SectionTitle>
    </Section>
  </>
}

export { FAQ };