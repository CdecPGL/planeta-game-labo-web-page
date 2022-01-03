import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

type HeaderProps = {
  pageTitle?: string;
  pageDescription?: string;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ pageTitle, pageDescription, className = '' }) => {
  const data = useStaticQuery<GatsbyTypes.HeaderQuery>(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const metaDataTitle = data?.site?.siteMetadata?.title ?? 'タイトル不明';
  const title = pageTitle == null ? metaDataTitle : `${metaDataTitle} ${pageTitle}`;
  const description = pageDescription == null ? 'Cdecの自作ゲーム置き場' : pageDescription;

  function menuOpenHandler() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <header className={className}>
      <Helmet>
        <meta charSet='utf-8' />
        <html lang='ja' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>

      <nav className='flex justify-center w-full mb-9 py-4 border-b-2'>
        {/* スマホでのメニューボタン */}
        <div className='fixed right-4 lg:hidden z-50'>
          <button
            className='flex items-center px-3 py-2 border rounded bg-gray-600 bg-opacity-70 border-black hover:text-white hover:border-white'
            onClick={menuOpenHandler}
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>メニュー</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>

        <div className='flex flex-1 flex-wrap items-center justify-center lg:justify-start max-w-full lg:flex-nowrap lg:max-w-screen-lg'>
          <Link to='/'>
            <div className='flex items-center flex-shrink-0 mr-6'>
              <StaticImage className='h-8 w-64 mr-2' src='../images/logo.png' alt='Logo' />
            </div>
          </Link>
          <div
            className={
              'text-center font-bold items-center transition flex-grow w-full fixed top-16 z-50 bg-black border border-white rounded-xl origin-top text-lg divide-y-2 lg:flex lg:w-auto lg:static lg:bg-transparent lg:rounded-none lg:border-none lg:text-sm lg:divide-y-0 lg:space-x-4' +
              (isMenuOpened ? ' scale-y-100' : ' scale-y-0 lg:scale-y-100')
            }
          >
            <Link to='/games' className='text-standard-color block py-4 lg:inline-block'>
              ゲーム
            </Link>
            {/* <Link to='/articles' className='text-standard-color block py-4 lg:inline-block'>
              記事
            </Link> */}
            <Link to='/others' className='text-standard-color block py-4 lg:inline-block '>
              その他
            </Link>
            <Link to='/relatedsites' className='text-standard-color block py-4 lg:inline-block'>
              関連サイト
            </Link>
            <Link to='/contact' className='text-standard-color block py-4 lg:inline-block'>
              コンタクト
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
