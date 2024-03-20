import { WorklineSVG } from '../WorklineSVG'

import './WorklineBox.scss'

type Props = {
  worklineElement: {
    id: string;
    h3: string;
    paragraf: string;
  }
}

const WorklineBox = ({ worklineElement }: Props) => {
  return <div className="workline__box">
    <div className="workline__box-content">
      <WorklineSVG id={worklineElement.id} />
      <h3>{worklineElement.h3}</h3>
      <p>{worklineElement.paragraf}
      </p>
    </div>
  </div >
}

export { WorklineBox };