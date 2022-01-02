import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

type LayoutProp = {
  pageTitle?: string;
  pageDescription?: string;
};

const Layout: React.FC<LayoutProp> = ({ children, pageTitle, pageDescription }) => {
  return (
    <div className='font-body bg-gradient-to-b from-indigo-400 to-sky-200'>
      <Header pageTitle={pageTitle} pageDescription={pageDescription} />
      <div className='flex justify-center'>
        <div className='flex flex-1 flex-wrap max-w-full lg:flex-nowrap lg:max-w-screen-lg'>
          <div className='flex-none w-full lg:flex-auto lg:w-3/4'>
            <main>{children}</main>
          </div>
          <div className='flex-none w-full lg:flex-auto lg:w-1/4'>
            <SideBar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
