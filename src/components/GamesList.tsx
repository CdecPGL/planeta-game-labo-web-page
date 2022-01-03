import React from 'react';
import { DateTime } from 'luxon';
import { ImageDataLike } from 'gatsby-plugin-image';
import GameCard, { GameCardProps } from './GameCard';

type GameJsonQueryResult = Pick<
  GatsbyTypes.GamesJson,
  | 'title'
  | 'genres'
  | 'platforms'
  | 'officialPageUrl'
  | 'updateDate'
  | 'currentVersion'
  | 'catchPhrase'
  | 'isDeveloping'
  | 'releaseSchedule'
> & {
  defaultPageUrl: GatsbyTypes.GamesJson['gatsbyPath'];
} & {
  readonly screenShots: GatsbyTypes.Maybe<
    ReadonlyArray<
      GatsbyTypes.Maybe<{
        readonly childImageSharp: GatsbyTypes.Maybe<
          Pick<GatsbyTypes.ImageSharp, 'gatsbyImageData'>
        >;
      }>
    >
  >;
};

export function getGameCardPropsFromGameJsonQueryResult(
  result: Partial<GameJsonQueryResult>,
): GameCardProps {
  return {
    title: result.title ?? 'タイトル不明',
    updateDate: DateTime.fromISO(result.updateDate ?? '1900-01-01'),
    currentVersion: result.currentVersion ?? 'バージョン不明',
    genres: result.genres?.filter((g): g is string => g != null) ?? [],
    platforms: result.platforms?.filter((g): g is string => g != null) ?? [],
    officialPageUrl:
      result.officialPageUrl == null || result.officialPageUrl === ''
        ? result.defaultPageUrl ?? ''
        : result.officialPageUrl,
    thumbnail: result?.screenShots![1] as ImageDataLike | undefined,
    catchPhrase: result.catchPhrase ?? '',
    isDeveloping: result.isDeveloping,
    releaseSchedule: result.releaseSchedule,
  };
}

type GamesListProps = {
  games: readonly GameCardProps[];
};

const GamesList: React.FC<GamesListProps> = ({ games }) => {
  return (
    <div className='grid grid-col-1 items-stretch gap-4 py-4 lg:grid-cols-3'>
      {games.map((g, i) => {
        return <GameCard key={i} {...g} />;
      })}
    </div>
  );
};
export default GamesList;
