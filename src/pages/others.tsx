import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

const Others: React.FC = () => {
  return (
    <Layout>
      <Title>その他コンテンツ</Title>
      <Link to='/others/turingmachinesimulator'>
        <Heading>チューリングマシンシミュレーター</Heading>
      </Link>
      <Paragraph>チューリングマシンを定義してその動きを観察できるツール。</Paragraph>
    </Layout>
  );
};
export default Others;
