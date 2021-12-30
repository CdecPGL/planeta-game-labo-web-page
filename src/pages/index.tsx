import React from 'react';
import GamesList from '../components/GamesList';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Layout from '../components/Layout';
import NotificationList from '../components/NotificationList';
import UpdatedContentsList from '../components/UpdatedContentsList';

const IndexPage: React.FC = function () {
  return (
    <Layout>
      <main>
        <Paragraph>ここでは自作ゲームを公開しています。</Paragraph>
        <Heading>お知らせ</Heading>
        <NotificationList />
        <Heading>更新があったコンテンツ</Heading>
        <UpdatedContentsList />
        <Heading>ゲーム</Heading>
        <GamesList />
      </main>
    </Layout>
  );
};

export default IndexPage;
