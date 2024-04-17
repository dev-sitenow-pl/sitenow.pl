import { WorklineBox } from './WorklineBox'

import { Section } from '../Section'
import { SectionTitle } from '../SectionTitle'
import WorklineElements from '../../data/Workline.json';

const Workline = () => {
  return <>
    <Section sectionClass='sec__2'>
      <SectionTitle>
        Daj mi 1 minutę, a wyjaśnię <span>Ci jak działam</span>
      </SectionTitle>
      <div className="workline__main-box">
        {WorklineElements.map(worklineElement => (
          <WorklineBox worklineElement={worklineElement} />
        ))}

      </div>
    </Section>
  </>
}

export { Workline };