import React from 'react';

type ParagraphProps = {
  children?: React.ReactNode;
};

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className='text-base px-0 pt-0 mb-6'>{children}</p>;
};
export default Paragraph;
