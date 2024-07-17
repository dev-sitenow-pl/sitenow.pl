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
  const { id, h3, paragraf } = worklineElement;

  return <div className="workline__box">
    <div className="workline__box-content">
      <WorklineSVG id={id} />
      <h3>{h3}</h3>
      <p>{paragraf}
      </p>
    </div>
  </div >
}

export { WorklineBox };