import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

const NotFoundPage: React.FC = () => {
  return (
    <Layout pageTitle='ページが見つかりません' pageDescription='ページが見つかりません'>
      <Title>ページが見つかりません</Title>
      <Paragraph>
        お探しのページが見つかりませんでした。
        <br />
        <Link to='/'>トップページ</Link>からお探しください。
      </Paragraph>
    </Layout>
  );
};

export default NotFoundPage;
