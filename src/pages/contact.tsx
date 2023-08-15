import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import ItemList from '../components/ItemList';
import HeadContent from '../components/HeadContent';
import { HeadFC } from 'gatsby';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Title>コンタクト</Title>
      <ItemList
        items={[
          {
            title: 'メール',
            contents: ['気軽にお問い合わせください。', 'アドレス: cdecrement@gmail.com'],
          },
          {
            title: 'Twitter (Cdecユーザーページ)',
            contents: ['メンションやダイレクトメッセージでご連絡ください。'],
          },
          // {
          //   title: 'その他連絡フォーム',
          //   link: 'https://docs.google.com/forms/d/e/1FAIpQLSd9hpHK1GKU8mGuUQkMsgbIq1MHgmbdHi8QCMEeVlFdg0HJ8g/viewform',
          //   contents: ['実況やプレイ動画の投稿報告などができます。'],
          // },
        ]}
      />
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <HeadContent pageTitle='コンタクト' pageDescription='連絡先一覧' />
);

export default Contact;
