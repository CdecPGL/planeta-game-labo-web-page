import React from 'react';
import { DateTime } from 'luxon';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import 'twin.macro';

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
      <div tw='grid grid-cols-3 p-4 gap-4 items-stretch'>
        {data.allGamesJson.nodes.map((g, i) => {
          const screenShotImage = getImage(g.screenShots![0] as ImageDataLike);
          return (
            <div key={i} tw='rounded overflow-hidden shadow'>
              <div tw='bg-red-400 text-sm text-gray-50 p-2'>
                <p>
                  {DateTime.fromISO(g.updateDate ?? '1900-01-01').toFormat('yyyy/MM/dd更新')}(
                  {g.currentVersion})
                </p>
                <p>ジャンル:{g.genres?.join('、') ?? '不明'}</p>
                <p>プラットフォーム:{g.platforms?.join('、') ?? '不明'}</p>
              </div>

              <Link to={g.officialPageUrl ?? ''}>
                <div tw='bg-white p-2'>
                  <h1 tw='text-red-400 text-xl font-bold h-16'>{g.title}</h1>
                  {screenShotImage == null ? (
                    <>スクショなし</>
                  ) : (
                    <GatsbyImage
                      image={screenShotImage}
                      alt='ScreenShot'
                      tw='w-full'
                    ></GatsbyImage>
                  )}
                </div>

                <div tw='bg-white/[.5] p-2'>
                  <p>{g.catchPhrase}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GamesArea;
