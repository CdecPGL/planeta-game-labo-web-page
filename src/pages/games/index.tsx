import React from 'react';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import GamesList from '../../components/GamesList';

const Games: React.FC = () => {
  return (
    <Layout>
      <Title>公開中のゲーム</Title>
      <GamesList />
    </Layout>
  );
};
export default Games;
