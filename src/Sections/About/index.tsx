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
    </Section>
  </>
}

export { About };