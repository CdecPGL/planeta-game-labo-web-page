import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { DateTime } from 'luxon';

export type GameCardProps = {
  title: string;
  updateDate: DateTime;
  currentVersion: string;
  genres: readonly string[];
  platforms: readonly string[];
  officialPageUrl: string;
  thumbnail?: ImageDataLike;
  catchPhrase: string;
  isDeveloping?: boolean;
  releaseSchedule?: string;
};

const GameCard: React.FC<GameCardProps> = ({
  title,
  updateDate,
  currentVersion,
  genres,
  platforms,
  officialPageUrl,
  thumbnail,
  catchPhrase,
  isDeveloping = false,
  releaseSchedule,
}) => {
  const thumbnailImage = thumbnail == null ? undefined : getImage(thumbnail);
  const stateText = isDeveloping
    ? `開発中 ${releaseSchedule ?? '公開日未定'}`
    : `${updateDate.toFormat('yyyy/MM/dd更新')} (${currentVersion})`;
  const accentBgColor = isDeveloping ? 'bg-purple-500' : 'bg-indigo-500';
  const accentTextColor = isDeveloping ? 'text-purple-500' : 'text-indigo-500';

  return (
    <div className='grid container rounded-xl overflow-hidden shadow'>
      <div className={`grid item ${accentBgColor} text-xs text-gray-50 p-2`}>
        <p>{stateText}</p>
        <p>ジャンル:{genres.join('、')}</p>
        <p>プラットフォーム:{platforms.join('、')}</p>
      </div>

      <div className='grid item container bg-white p-2 hover:bg-slate-300'>
        <Link to={officialPageUrl}>
          <h1 className={`grid item h-16 ${accentTextColor} text-lg font-bold`}>{title}</h1>
          <div className='grid item h-auto'>
            {thumbnailImage == null ? (
              <p>スクショなし</p>
            ) : (
              <GatsbyImage
                image={thumbnailImage}
                alt='ScreenShot'
                className='w-full h-fit'
                objectFit='contain'
              />
            )}
          </div>
        </Link>
      </div>

      <div className='grid item text-sm bg-white/[.7] p-2 text-slate-900'>
        <p>{catchPhrase}</p>
      </div>
    </div>
  );
};
export default GameCard;
