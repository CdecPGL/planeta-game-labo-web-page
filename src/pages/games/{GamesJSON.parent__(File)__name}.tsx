import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';

const Game: React.FC<{data: GatsbyTypes.GameQuery}> = ({ data }) => {
  return <Layout><p>{data?.gamesJson?.title}</p></Layout>;
};
export default Game;

export const query = graphql`
  query Game ($id: String) {
    gamesJson(id: { eq: $id }) {
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
`;
