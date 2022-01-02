import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Paragraph from '../components/Paragraph';

const RelatedSites: React.FC = () => {
  return (
    <Layout pageTitle='関連サイト' pageDescription='関連サイト一覧'>
      <Title>関連サイト</Title>
      <Heading>自分のサイト</Heading>
      <Link to='https://cdecrement.blog.fc2.com/'>
        <SubHeading>Cdecの気まぐれ日記</SubHeading>
      </Link>
      <Paragraph>不定期に色々なことを書いています。</Paragraph>

      <Heading>ソフト配布サイト</Heading>
      <Link to='https://www.freem.ne.jp/brand/4570'>
        <SubHeading>ふりーむ (Cdec公開ゲーム一覧)</SubHeading>
      </Link>
      <Paragraph>ゲームを配布させてもらっています。</Paragraph>
      <Link to='https://www.vector.co.jp/vpack/browse/person/an059029.html'>
        <SubHeading>Vector (Cdec作者ページ)</SubHeading>
      </Link>
      <Paragraph>同じくゲームを配布させてもらっています。</Paragraph>

      <Heading>その他サイト</Heading>
      <Link to='https://github.com/CdecPGL'>
        <SubHeading>GitHub (Cdecページ)</SubHeading>
      </Link>
      <Paragraph>ゲームのソースコードなどを公開しています。</Paragraph>
    </Layout>
  );
};
export default RelatedSites;
