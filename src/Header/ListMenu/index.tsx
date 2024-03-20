import React from 'react';

type Props = {
  element: {
    scrollTarget: string;
    iconName: string;
    liItemName: string;
    liClassName?: string;
  };
  handleMenuToggle: () => void;
};

const LiMenu = ({ element, handleMenuToggle }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    handleMenuToggle();

    let target = document.querySelector(element.scrollTarget);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li key={element.scrollTarget} className={element.liClassName}>
      <a href={element.scrollTarget} onClick={handleClick}>
        <span className="box-for-icon">
          <span className="material-symbols-outlined">
            {element.iconName}
          </span>
        </span>
        {element.liItemName}
      </a>
    </li>
  );
};

export { LiMenu };