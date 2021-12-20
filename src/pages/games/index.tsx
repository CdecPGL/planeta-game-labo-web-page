import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';

const Games: React.FC<{ data: GatsbyTypes.GamesQuery }> = ({ data }) => {
  return <Layout>Games</Layout>;
};
export default Games;

export const query = graphql`
  query Games {
    allGamesJson(sort: { fields: updateDate, order: DESC }) {
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
            gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
