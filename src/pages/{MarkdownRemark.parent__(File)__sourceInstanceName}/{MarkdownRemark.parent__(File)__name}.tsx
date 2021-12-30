import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import { DateTime } from 'luxon';

interface Text {
  type: 'text';
  value: string;
}

interface RootElement {
  type: 'root';
  children: readonly Node[];
}

interface PElement {
  type: 'element';
  tagName: 'p';
  children: readonly Node[];
}

interface H1Element {
  type: 'element';
  tagName: 'h1';
  children: readonly Node[];
}

interface H2Element {
  type: 'element';
  tagName: 'h2';
  children: readonly Node[];
}

interface H3Element {
  type: 'element';
  tagName: 'h3';
  children: readonly Node[];
}

interface AElement {
  type: 'element';
  tagName: 'a';
  properties: { href: string };
  children: readonly Node[];
}

interface OtherElement {
  type: 'element';
  tagName: undefined;
  children: readonly Node[];
}

type Node = Text | PElement | H1Element | H2Element | H3Element | AElement | OtherElement;

function processNode(node: Node, id: string) {
  if (node.type === 'text') {
    return <>{node.value}</>;
  }

  if (node.tagName === 'p') {
    return (
      <Paragraph key={id}>{node.children.map((c, i) => processNode(c, `${id}-${i}`))}</Paragraph>
    );
  }

  if (node.tagName === 'h1') {
    return <Title key={id}>{node.children.map((c, i) => processNode(c, `${id}-${i}`))}</Title>;
  }

  if (node.tagName === 'h2') {
    return <Heading key={id}>{node.children.map((c, i) => processNode(c, `${id}-${i}`))}</Heading>;
  }

  if (node.tagName === 'h3') {
    return (
      <SubHeading key={id}>{node.children.map((c, i) => processNode(c, `${id}-${i}`))}</SubHeading>
    );
  }

  if (node.tagName === 'a') {
    return (
      <Link to={node.properties.href}>
        {node.children.map((c, i) => processNode(c, `${id}-${i}`))}
      </Link>
    );
  }

  return <div key={id}>{node.children.map((c, i) => processNode(c, `${id}-${i}`))}</div>;
}

const Post: React.FC<{ data: GatsbyTypes.PostQuery }> = ({ data }) => {
  const htmlAst = data?.markdownRemark?.htmlAst as unknown as RootElement;

  const createDateText = DateTime.fromISO(
    data?.markdownRemark?.frontmatter?.createDate ?? '1900-01-01',
  ).toFormat('yyyy/MM/dd');
  const updateDateText = DateTime.fromISO(
    data?.markdownRemark?.frontmatter?.updateDate ?? '1900-01-01',
  ).toFormat('yyyy/MM/dd');
  const timeStamp =
    createDateText === updateDateText
      ? `${createDateText}作成`
      : `${createDateText}作成（${updateDateText}）更新`;

  return (
    <Layout>
      <Title>{data?.markdownRemark?.frontmatter?.title}</Title>
      <p className='text-sm text-center mb-8'>{timeStamp}</p>
      {htmlAst.children.map((c, i) => processNode(c, `${i}`))}
    </Layout>
  );
};
export default Post;

export const query = graphql`
  query Post($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        createDate
        updateDate
      }
      htmlAst
    }
  }
`;
