type Props = {
  element: {
    scrollTarget: string;
    iconName: string;
    liItemName: string;
    liClassName?: string;
  }
}

const LiMenu = ({ element }: Props) => {
  return <>

    <li key={element.scrollTarget} className={element.liClassName}>
      <a href={element.scrollTarget}>
        <span className="box-for-icon">
          <span className="material-symbols-outlined">
            {element.iconName}
          </span>
        </span>
        {element.liItemName}
      </a>
    </li>

  </>
}

export { LiMenu };