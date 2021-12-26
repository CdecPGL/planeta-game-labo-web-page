import React from 'react';

const Heading: React.FC = ({ children }) => {
  return <h2 className="text-2xl pt-0 pr-2 pb-2 pl-8 border-solid border-b-2 border-gray-300">{children}</h2>;
};
export default Heading;
