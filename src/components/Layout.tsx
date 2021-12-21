import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { GlobalStyles } from 'twin.macro';

const Layout: React.FC = ({ children }) => {
  return (
    <div tw="font-sans bg-gradient-to-b from-blue-600 to-blue-200">
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
