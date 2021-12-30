import React from 'react';
import { Helmet } from 'react-helmet';

const SideBar: React.FC = () => {
  return (
    <div className='pl-4'>
      <a
        className='twitter-timeline'
        data-height='640'
        href='https://twitter.com/CdecPGL?ref_src=twsrc%5Etfw'
      >
        Tweets by CdecPGL
      </a>
      <Helmet>
        <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8'></script>
      </Helmet>
    </div>
  );
};
export default SideBar;
