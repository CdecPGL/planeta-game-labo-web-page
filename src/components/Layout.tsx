import React from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  sideBarComponent?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children, sideBarComponent }) => {
  return (
    <div className='font-body bg-gradient-to-b from-blue-600 to-sky-200'>
      <Header />
      <div className='flex justify-center'>
        <div className='flex flex-1 flex-wrap max-w-full lg:flex-nowrap lg:max-w-screen-lg'>
          <div className='flex-none w-full lg:flex-auto lg:w-3/4'>{children}</div>
          <div className='flex-none w-full lg:flex-auto lg:w-1/4'>{sideBarComponent}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
