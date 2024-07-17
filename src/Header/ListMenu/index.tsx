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
  const { scrollTarget, iconName, liItemName, liClassName } = element;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {

    if (scrollTarget.includes('#')) {
      if (!liClassName) event.preventDefault();
      handleMenuToggle();
      let target = document.querySelector(scrollTarget);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <li className={liClassName}>
      <a href={scrollTarget} onClick={handleClick}>
        <span className="box-for-icon">
          <span className="material-symbols-outlined">
            {iconName}
          </span>
        </span>
        {liItemName}
      </a>
    </li>
  );
};

export { LiMenu };