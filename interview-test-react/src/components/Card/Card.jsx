import React from 'react';

const Card = ({
  children,
  bgColor,
  padding = 'p-6',
}) => {
  return (
    <div className={'w-full rounded-lg' + ' ' + bgColor + ' ' + padding} >
      {children}
    </div>
  );
};

export default Card;
