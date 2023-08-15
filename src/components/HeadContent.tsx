import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

type HeadProps = {
  pageTitle?: string;
  pageDescription?: string;
};

const HeadContent: React.FC<HeadProps> = ({ pageTitle, pageDescription }) => {
  const data = useStaticQuery<Queries.HeaderQuery>(graphql`
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
