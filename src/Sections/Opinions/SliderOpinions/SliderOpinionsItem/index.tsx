import './SliderOpinionsItem.scss';


type Props = {
  opinionData: {
    text: string,
    author: string,
    brandName: string,
  }
}
const SliderOpinionsItem = ({ opinionData }: Props) => {
  return <div className="slider-item">
    <div className="slider-item__content">
      <div className="slider-item__box__icon">
        <span className="material-symbols-outlined">
          format_quote
        </span>
      </div>
      <div className="slider-item__box__text">
        {opinionData.text}
      </div>
      <div className="slider-item__box__author">
        {opinionData.author}
        <div className="slider-item__box__author__brand">
          {opinionData.brandName}
        </div>
      </div>
    </div>
  </div>
}

export { SliderOpinionsItem };
