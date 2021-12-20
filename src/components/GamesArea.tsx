import React from 'react';
import { DateTime } from 'luxon';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

const GamesArea: React.FC = () => {
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
              gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <h2>ゲーム</h2>
      <div className='grid grid-cols-3 gap-4'>
        {data.allGamesJson.nodes.map((g, i) => {
          const screenShotImage = getImage(g.screenShots![0] as ImageDataLike);
          return (
            <div key={i} className='max-w-sm rounded overflow-hidden shadow-lg'>
              <div className=''>
                <p>
                  {DateTime.fromISO(g.updateDate ?? '1900-01-01').toFormat('yyyy/MM/dd更新')}(
                  {g.currentVersion})
                </p>
                <p>ジャンル:{g.genres?.join('、') ?? '不明'}</p>
                <p>プラットフォーム:{g.platforms?.join('、') ?? '不明'}</p>
              </div>

              <div>
                <h1>
                  <Link to={g.officialPageUrl ?? ''}>{g.title}</Link>
                </h1>

                <Link to={g.officialPageUrl ?? ''}>
                  {screenShotImage == null ? (
                    <>スクショなし</>
                  ) : (
                    <GatsbyImage image={screenShotImage} alt='ScreenShot'></GatsbyImage>
                  )}
                </Link>
              </div>

              <div>
                <Link to={g.officialPageUrl ?? ''}>{g.catchPhrase}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GamesArea;
