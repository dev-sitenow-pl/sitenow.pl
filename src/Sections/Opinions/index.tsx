import { Section } from '../Section'
import { SectionTitle } from '../SectionTitle'
import { TargetScroll } from '../TargetScroll'

const Opinions = () => {
  return <>
    <Section sectionClass='sec__5'>
      <TargetScroll targetId='opinions' />
      <SectionTitle>
        Fajnie nam się <span>pracowało</span>
      </SectionTitle>
    </Section>
  </>
}

export { Opinions };