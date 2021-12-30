import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='text-center text-base py-2 mt-6 border-t-2'>
      © プラネタゲームラボ {new Date().getFullYear()}
    </footer>
  );
};
export default Footer;
