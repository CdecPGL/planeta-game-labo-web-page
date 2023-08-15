import React from 'react';

type SubHeadingProps = {
  children?: React.ReactNode;
};

const SubHeading: React.FC<SubHeadingProps> = ({ children }) => {
  return <h3 className='text-xl font-bold px-2 pb-2 mb-2'>{children}</h3>;
};
export default SubHeading;
