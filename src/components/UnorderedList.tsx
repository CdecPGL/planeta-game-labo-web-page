import React from 'react';

const UnorderedList: React.FC = ({ children }) => {
  return <ul className='list-disc text-base pl-6 mb-3'>{children}</ul>;
};
export default UnorderedList;
