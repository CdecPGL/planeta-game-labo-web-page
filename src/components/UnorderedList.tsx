import React from 'react';

type UnorderedListProps = {
  children?: React.ReactNode;
};

const UnorderedList: React.FC<UnorderedListProps> = ({ children }) => {
  return <ul className='list-disc text-base pl-6 mb-3'>{children}</ul>;
};
export default UnorderedList;
