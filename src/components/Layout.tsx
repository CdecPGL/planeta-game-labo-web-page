import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='font-sans bg-gradient-to-b from-blue-600 to-sky-200'>
      <Header />
      <div className='flex'>
        <div className="flex-auto"> {children}</div>
        <div className="basis-96"></div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
