import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import GamesList, { getGameCardPropsFromGameJsonQueryResult } from '../../components/GamesList';

const Games: React.FC<{ data: GatsbyTypes.GamesQuery }> = ({ data }) => {
  const games = data?.allGamesJson?.nodes?.map(getGameCardPropsFromGameJsonQueryResult);

  return (
    <Layout pageTitle='ゲーム一覧' pageDescription='公開中のゲーム一覧'>
      <Title>ゲーム一覧</Title>
      <GamesList games={games} />
    </Layout>
  );
};
export default Games;

// 更新日時が新しい順
export const query = graphql`
  query Games {
    allGamesJson(sort: { fields: [updateDate], order: [DESC, DESC] }) {
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
