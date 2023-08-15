import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { DateTime } from 'luxon';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import UnorderedList from '../../components/UnorderedList';
import HeadContent from '../../components/HeadContent';

function getStoreLink(gameData: Queries.GameQuery['gamesJson']) {
  if (gameData == null || gameData.stores == null) {
    return <>公開場所なし</>;
  }

  return (
    <>
      {gameData?.stores.map((s) => (
        <>
          {s?.platform}（
          {s?.sites?.map((si, i) => {
            if (i + 1 === s?.sites?.length) {
              return <Link to={si?.url ?? ''}>{si?.name}</Link>;
            } else {
              return (
                <>
                  <Link to={si?.url ?? ''}>{si?.name}</Link>、
                </>
              );
            }
          })}
          ）
        </>
      ))}
    </>
  );
}

const Game: React.FC<{ data: Queries.GameQuery }> = ({ data }) => {
  const game = data?.gamesJson;
  if (game == null) {
    throw new Error('Game is null.');
  }

  const titleImage = getImage(game.screenShots![0] as ImageDataLike);
  const isDeveloping = game.isDeveloping ?? false;

  const releaseInfos = isDeveloping
    ? [
        `状況: ${game.releaseSchedule ?? '開発中'}`,
        `公開予定日: ${
          game.releaseDate != null
            ? DateTime.fromISO(game.releaseDate).toFormat('yyyy/MM/dd')
            : '詳細未定'
        }`,
      ]
    : [
        `公開日: ${DateTime.fromISO(game.releaseDate ?? '1900-01-01').toFormat('yyyy/MM/dd')}`,
        `更新日: ${DateTime.fromISO(game.updateDate ?? '1900-01-01').toFormat('yyyy/MM/dd')} (${
          game.currentVersion
        })`,
      ];

  return (
    <Layout>
      <Title>{game.title}</Title>
      <Heading>概要</Heading>
      <Paragraph>
        {game.summary?.map((l) => (
          <>
            {l}
            <br />
          </>
        ))}
      </Paragraph>

      <UnorderedList>
        {releaseInfos.map((info) => (
          <li>{info}</li>
        ))}
        <li>ジャンル: {game.genres?.join('、') ?? '不明'}</li>
        <li>対応プラットフォーム: {game.platforms?.join('、') ?? '不明'}</li>
        <li>ダウンロード: {getStoreLink(game)}</li>
      </UnorderedList>

      {titleImage == null ? (
        <></>
      ) : (
        <>
          <Heading>ゲーム画面</Heading>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <div>
              <p>タイトル画面</p>
              <GatsbyImage
                image={titleImage}
                alt='Title'
                className='w-full h-auto'
                objectFit='contain'
              />
            </div>
            {game.screenShots?.map((s, i) => {
              if (i === 0) {
                return <></>;
              }

              const image = getImage(s as ImageDataLike);
              const imageName = `PlayScreenShot${i}`;
              return (
                <div>
                  <p>プレイ画面{i}</p>
                  <GatsbyImage
                    image={image!}
                    alt={imageName}
                    className='w-full h-auto'
                    objectFit='contain'
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </Layout>
  );
};
export default Game;

export const Head: React.FC<{ data: Queries.GameQuery }> = ({ data }) => {
  const game = data?.gamesJson;
  if (game == null) {
    throw new Error('Game is null.');
  }

  const pageDescription = `${game.title}の説明ページ`;
  return <HeadContent pageTitle={game.title!} pageDescription={pageDescription} />;
};

export const query = graphql`
  query Game($id: String) {
    gamesJson(id: { eq: $id }) {
      title
      summary
      genres
      platforms
      officialPageUrl
      releaseDate
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
      stores {
        platform
        sites {
          name
          url
        }
      }
    }
  }
`;
