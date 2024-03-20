import { Section } from '../Section'
import { SectionTitle } from '../SectionTitle'
import { TargetScroll } from '../TargetScroll'

import { FAQTabs } from './FAQTabs'
import './FAQ.scss'

const FAQ = () => {
  return <>
    <Section sectionClass='sec__6'>
      <TargetScroll targetId='faq' />
      <SectionTitle>
        Pierwsze <span>pytania i odpowiedzi</span>
      </SectionTitle>
      <FAQTabs />
    </Section>

  </>
}

export { FAQ };