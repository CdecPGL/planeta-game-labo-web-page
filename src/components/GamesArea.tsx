import React from 'react';
import { DateTime } from 'luxon';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import Heading from './Heading';

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
              gatsbyImageData(width: 480, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          defaultPageUrl: gatsbyPath(filePath: "/games/{GamesJSON.parent__(File)__name}")
        }
      }
    }
  `);

  return (
    <>
      <Heading>ゲーム</Heading>
      <div className='grid grid-cols-3 p-4 gap-4 items-stretch'>
        {data.allGamesJson.nodes.map((g, i) => {
          const screenShotImage = getImage(g.screenShots![0] as ImageDataLike);
          return (
            <div key={i} className='grid container rounded overflow-hidden shadow'>
              <div className='grid item bg-red-400 text-sm text-gray-50 p-2'>
                <p>
                  {DateTime.fromISO(g.updateDate ?? '1900-01-01').toFormat('yyyy/MM/dd更新')}(
                  {g.currentVersion})
                </p>
                <p>ジャンル:{g.genres?.join('、') ?? '不明'}</p>
                <p>プラットフォーム:{g.platforms?.join('、') ?? '不明'}</p>
              </div>

              <div className='grid item container bg-white p-2'>
                <Link to={g.officialPageUrl ?? g.defaultPageUrl ?? ''}>
                  <h1 className='grid item h-16 text-red-400 text-xl font-bold'>{g.title}</h1>
                  <div className='grid item h-64'>
                    {screenShotImage == null ? (
                      <p>スクショなし</p>
                    ) : (
                      <GatsbyImage
                        image={screenShotImage}
                        alt='ScreenShot'
                        className='w-full'
                        objectFit='cover'
                      />
                    )}
                  </div>
                </Link>
              </div>

              <div className='grid item bg-white/[.5] p-2'>
                <Link to={g.officialPageUrl ?? g.defaultPageUrl ?? ''}>
                  <p>{g.catchPhrase}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GamesArea;
