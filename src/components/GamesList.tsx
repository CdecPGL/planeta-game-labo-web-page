import React from 'react';
import { DateTime } from 'luxon';
import { useStaticQuery, graphql } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';
import GameCard from './GameCard';

const GamesList: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.GamesAreaQuery>(graphql`
    query GamesArea {
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
              gatsbyImageData(width: 480, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          defaultPageUrl: gatsbyPath(filePath: "/games/{GamesJSON.parent__(File)__name}")
        }
      }
    }
  `);

  return (
    <div className='grid grid-cols-3 p-4 gap-4 items-stretch'>
      {data.allGamesJson.nodes.map((g, i) => {
        return (
          <GameCard
            key={i}
            title={g.title ?? 'タイトル不明'}
            updateDate={DateTime.fromISO(g.updateDate ?? '1900-01-01')}
            currentVersion={g.currentVersion ?? 'バージョン不明'}
            genres={g.genres?.filter((g): g is string => g != null) ?? []}
            platforms={g.platforms?.filter((g): g is string => g != null) ?? []}
            officialPageUrl={g.officialPageUrl ?? g.defaultPageUrl ?? ''}
            titleScreenShot={g.screenShots![0] as ImageDataLike}
            catchPhrase={g.catchPhrase ?? ''}
          />
        );
      })}
    </div>
  );
};
export default GamesList;
