import React from 'react';

type Props = {
  children: React.ReactNode;
}

const SectionTitle = (props: Props) => {
  return <>
    <div className="flex-row">
      <div className="colflex-12">
        <h2>
          {props.children}
        </h2>
      </div>
    </div>

  </>
}

export { SectionTitle };