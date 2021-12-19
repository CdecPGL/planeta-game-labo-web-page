import * as React from 'react';
import GamesArea from '../components/GamesArea';
import Layout from '../components/Layout';
import NotificationArea from '../components/NotificationArea';
import UpdatedContentsArea from '../components/UpdatedContentsArea';

// markup
const IndexPage = function () {
  return (
    <Layout>
      <main>
        <p>ここでは自作ゲームを公開しています。</p>
        <NotificationArea />
        <UpdatedContentsArea />
        <GamesArea />
      </main>
    </Layout>
  );
};

export default IndexPage;
