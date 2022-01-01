import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { DateTime } from 'luxon';

type GameCardProps = {
  title: string;
  updateDate: DateTime;
  currentVersion: string;
  genres: readonly string[];
  platforms: readonly string[];
  officialPageUrl: string;
  titleScreenShot?: ImageDataLike;
  catchPhrase: string;
};

const GameCard: React.FC<GameCardProps> = ({
  title,
  updateDate,
  currentVersion,
  genres,
  platforms,
  officialPageUrl,
  titleScreenShot,
  catchPhrase,
}) => {
  const titleScreenShotImage = titleScreenShot == null ? undefined : getImage(titleScreenShot);

  return (
    <div className='grid container rounded-xl overflow-hidden shadow'>
      <div className='grid item bg-red-400 text-sm text-gray-50 p-2'>
        <p>
          {updateDate.toFormat('yyyy/MM/dd更新')}({currentVersion})
        </p>
        <p>ジャンル:{genres.join('、')}</p>
        <p>プラットフォーム:{platforms.join('、')}</p>
      </div>

      <div className='grid item container bg-white p-2 hover:bg-slate-300'>
        <Link to={officialPageUrl}>
          <h1 className='grid item h-16 text-red-400 text-xl font-bold'>{title}</h1>
          <div className='grid item h-64'>
            {titleScreenShotImage == null ? (
              <p>スクショなし</p>
            ) : (
              <GatsbyImage
                image={titleScreenShotImage}
                alt='ScreenShot'
                className='w-full'
                objectFit='cover'
              />
            )}
          </div>
        </Link>
      </div>

      <div className='grid item bg-white/[.5] p-2 text-slate-900'>
        <p>{catchPhrase}</p>
      </div>
    </div>
  );
};
export default GameCard;
