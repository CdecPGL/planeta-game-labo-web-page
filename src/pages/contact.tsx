import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Paragraph from '../components/Paragraph';

const Contact: React.FC = () => {
  return (
    <Layout pageTitle='コンタクト' pageDescription='連絡先一覧'>
      <Title>コンタクト</Title>
      <Heading>メール</Heading>
      <Paragraph>
        気軽にお問い合わせください。
        <br />
        アドレス: cdecrement@gmail.com
      </Paragraph>

      <Link to='https://twitter.com/cdecpgl'>
        <Heading>Twitter (Cdecユーザーページ)</Heading>
      </Link>
      <Paragraph>メンションやダイレクトメッセージでご連絡ください。</Paragraph>

      {/* <Link to='https://docs.google.com/forms/d/e/1FAIpQLSd9hpHK1GKU8mGuUQkMsgbIq1MHgmbdHi8QCMEeVlFdg0HJ8g/viewform'>
        <Heading>その他連絡フォーム</Heading>
      </Link>
      <Paragraph>実況やプレイ動画の投稿報告などができます。</Paragraph> */}
    </Layout>
  );
};
export default Contact;
