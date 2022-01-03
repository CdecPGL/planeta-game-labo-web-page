import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import ItemList from '../components/ItemList';

const Others: React.FC = () => {
  return (
    <Layout pageTitle='その他コンテンツ' pageDescription='ゲーム以外のコンテンツ一覧'>
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
