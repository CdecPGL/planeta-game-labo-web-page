import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col font-body bg-gradient-to-b from-black to-black min-h-screen'>
      <Header className='flex-none' />
      <div className='flex flex-1 justify-center mx-4 lg:mx-0'>
        <div className='flex flex-1 flex-wrap max-w-full lg:flex-nowrap lg:max-w-screen-lg'>
          <div className='flex-none w-full lg:flex-auto lg:w-3/4'>
            <main>{children}</main>
          </div>
          <div className='flex-none w-full lg:flex-auto lg:w-1/4'>
            <SideBar />
          </div>
        </div>
      </div>
      {/* 画面一番下に表示 */}
      <Footer className='flex-none' />
    </div>
  );
};
export default Layout;
