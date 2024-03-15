import React from 'react';

type Props = {
  children: React.ReactNode;
  sectionClass?: string
}

const Section = (props: Props) => {
  return <>
    <section className={props.sectionClass}>{props.children}</section>
  </>;
};

export { Section };