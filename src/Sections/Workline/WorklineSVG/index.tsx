import './WorklineSVG.scss'

type Props = {
  id: string;
}
const WorklineSVG = (props: Props) => {
  return <div className="workline__stage">
    <svg className="workline__stage-svg" fill="#000000" version="1.1" id="Capa_1" width="100px" height="100px"
      viewBox="0 0 485.688 485.688" transform="rotate(90)">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path
              d="M364.269,453.155H121.416L0,242.844L121.416,32.533h242.853l121.419,210.312L364.269,453.155z M131.905,434.997h221.878 l110.939-192.152L353.783,50.691H131.905L20.966,242.844L131.905,434.997z">
            </path>
          </g>
        </g>
      </g>
    </svg>
    <span>{props.id}</span>
  </div>
}

export { WorklineSVG };