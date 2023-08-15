import React from 'react';
import { HeadFC, graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import GamesList, { getGameCardPropsFromGameJsonQueryResult } from '../../components/GamesList';
import HeadContent from '../../components/HeadContent';

const Games: React.FC<{ data: Queries.GamesQuery }> = ({ data }) => {
  const games = data?.allGamesJson?.nodes?.map(getGameCardPropsFromGameJsonQueryResult);

  return (
    <Layout>
      <Title>ゲーム一覧</Title>
      <GamesList games={games} />
    </Layout>
  );
};
export default Games;

export const Head: HeadFC = () => (
  <HeadContent pageTitle='ゲーム一覧' pageDescription='公開中のゲーム一覧' />
);

// 更新日時が新しい順
export const query = graphql`
  query Games {
    allGamesJson(sort: { updateDate: DESC }) {
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
