import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import ItemList from '../components/ItemList';
import HeadContent from '../components/HeadContent';

const RelatedSites: React.FC = () => {
  return (
    <Layout>
      <Title>関連サイト</Title>
      <ItemList
        items={[
          {
            meta: 'ブログ',
            title: 'Cdecの気まぐれ日記',
            link: 'https://cdecrement.blog.fc2.com/',
            contents: ['不定期に色々なことを書いています。'],
          },
          {
            meta: 'ソフト公開サイト',
            title: 'ふりーむ（Cdec公開ゲーム一覧）',
            link: 'https://www.freem.ne.jp/brand/4570',
            contents: ['ゲームを配布させてもらっています。'],
          },
          {
            meta: 'ソフト公開サイト',
            title: 'Vector（Cdec作者ページ）',
            link: 'https://www.vector.co.jp/vpack/browse/person/an059029.html',
            contents: ['同じくゲームを配布させてもらっています。'],
          },
          {
            meta: 'ソースコード置き場',
            title: 'GitHub (Cdecページ)',
            link: 'https://github.com/CdecPGL',
            contents: ['ゲームのソースコードなどを公開しています。'],
          },
        ]}
      />
    </Layout>
  );
};
export default RelatedSites;

export const Head = () => <HeadContent pageTitle='関連サイト' pageDescription='関連サイト一覧' />;
