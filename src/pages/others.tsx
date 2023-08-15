import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import ItemList from '../components/ItemList';
import HeadContent from '../components/HeadContent';

const Others: React.FC = () => {
  return (
    <Layout>
      <Title>その他コンテンツ</Title>
      <ItemList
        items={[
          {
            meta: 'ツール',
            title: 'チューリングマシンシミュレーター',
            link: '/others/turingmachinesimulator',
            contents: ['チューリングマシンを定義してその動きを観察できるツール。'],
          },
        ]}
      />
    </Layout>
  );
};
export default Others;

export const Head = () => (
  <HeadContent pageTitle='その他コンテンツ' pageDescription='ゲーム以外のコンテンツ一覧' />
);
