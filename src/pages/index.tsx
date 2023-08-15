import React from 'react';
import GamesList, { getGameCardPropsFromGameJsonQueryResult } from '../components/GamesList';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Layout from '../components/Layout';
import NotificationList from '../components/NotificationList';
import { graphql, Link } from 'gatsby';
import HeadContent from '../components/HeadContent';

const IndexPage: React.FC<{ data: Queries.IndexQuery }> = function ({ data }) {
  const recommendedGames = data?.recommendedGames?.nodes?.map(
    getGameCardPropsFromGameJsonQueryResult,
  );
  const developingGames = data?.developingGames?.nodes?.map(
    getGameCardPropsFromGameJsonQueryResult,
  );

  return (
    <Layout>
      <Paragraph>ここでは自作ゲームを公開しています。</Paragraph>
      <Heading>お知らせ</Heading>
      <NotificationList />
      {/* <Heading>ピックアップ</Heading> */}
      <Heading>おすすめ</Heading>
      <GamesList games={recommendedGames} />
      <div className='mb-4'>
        <Link to='/games'>{'> 全てのゲームを見る'}</Link>
      </div>
      <Heading>開発中</Heading>
      <GamesList games={developingGames} />
    </Layout>
  );
};

export const Head = () => <HeadContent />;

// おすすめ：開発中でないもののうち、おすすめレベルが高い順、同じ場合は更新日時が新しい順
// 開発中：開発中のもののうち、おすすめレベルが高い順、同じ場合は公開日が早い順
export const query = graphql`
  query Index {
    recommendedGames: allGamesJson(
      filter: { isDeveloping: { ne: true } }
      sort: [{ recommendationLevel: DESC }, { updateDate: DESC }]
      limit: 3
    ) {
      nodes {
        title
        genres
        platforms
        officialPageUrl
        updateDate
        currentVersion
        catchPhrase
        screenShots {
          childImageSharp {
            gatsbyImageData(width: 480, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        defaultPageUrl: gatsbyPath(filePath: "/games/{GamesJSON.parent__(File)__name}")
      }
    }
    developingGames: allGamesJson(
      filter: { isDeveloping: { eq: true } }
      sort: [{ recommendationLevel: DESC }, { releaseDate: ASC }]
    ) {
      nodes {
        title
        genres
        platforms
        officialPageUrl
        updateDate
        currentVersion
        catchPhrase
        isDeveloping
        releaseSchedule
        screenShots {
          childImageSharp {
            gatsbyImageData(width: 480, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        defaultPageUrl: gatsbyPath(filePath: "/games/{GamesJSON.parent__(File)__name}")
      }
    }
  }
`;

export default IndexPage;
