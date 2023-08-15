import React from 'react';

type HeadingProps = {
  children?: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <div className='flex text-2xl font-bold px-2 pb-2 mb-2 border-solid border-b-2 border-gray-300'>
      <svg width='2rem' height='2rem' viewBox='0 0 100 100' className='mr-2'>
        <circle cx='42' cy='42' r='42' fill='rgba(100, 255, 255, 0.75)' />
        <circle cx='67' cy='67' r='33' fill='rgba(100, 255, 100, 0.75)' />
      </svg>
      <h2 className=''>{children}</h2>
    </div>
  );
};
export default Heading;
