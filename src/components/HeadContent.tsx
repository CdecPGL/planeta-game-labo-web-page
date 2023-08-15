import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

type HeadProps = {
  pageTitle?: string;
  pageDescription?: string;
  className?: string;
};

const HeadContent: React.FC<HeadProps> = ({ pageTitle, pageDescription, className = '' }) => {
  const data = useStaticQuery<GatsbyTypes.HeaderQuery>(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const metaDataTitle = data?.site?.siteMetadata?.title ?? 'タイトル不明';
  const title = pageTitle == null ? metaDataTitle : `${metaDataTitle} ${pageTitle}`;
  const description = pageDescription == null ? 'Cdecの自作ゲーム置き場' : pageDescription;

  return (
    <>
      <meta charSet='utf-8' />
      <html lang='ja' />
      <title>{title}</title>
      <meta name='description' content={description} />
    </>
  );
};
export default HeadContent;
