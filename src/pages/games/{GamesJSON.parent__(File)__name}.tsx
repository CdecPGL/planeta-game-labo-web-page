import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { DateTime } from 'luxon';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import UnorderedList from '../../components/UnorderedList';

function getStoreLink(gameData: GatsbyTypes.GameQuery['gamesJson']) {
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

const Game: React.FC<{ data: GatsbyTypes.GameQuery }> = ({ data }) => {
  const game = data?.gamesJson;
  if (game == null) {
    throw new Error('Game is null.');
  }

  const titleImage = getImage(game.screenShots![0] as ImageDataLike);
  const pageDescription = `${game.title}の説明ページ`;
  return (
    <Layout pageTitle={game.title} pageDescription={pageDescription}>
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
        <li>公開: {DateTime.fromISO(game.releaseDate ?? '1900-01-01').toFormat('yyyy/MM/dd')}</li>
        <li>
          最終更新: {DateTime.fromISO(game.updateDate ?? '1900-01-01').toFormat('yyyy/MM/dd')} (
          {game.currentVersion})
        </li>
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
