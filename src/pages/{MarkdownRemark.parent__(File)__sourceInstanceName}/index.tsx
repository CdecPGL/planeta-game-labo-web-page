import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import ItemList from '../../components/ItemList';
import { DateTime } from 'luxon';

function getTitle(sourceInstanceName: string) {
  switch (sourceInstanceName) {
    case 'notifications':
      return 'お知らせ一覧';
    default:
      return '謎の一覧';
  }
}

const Posts: React.FC<{
  data: GatsbyTypes.PostsQuery;
  params: { parent__sourceInstanceName: string };
}> = ({ data, params }) => {
  const title = getTitle(params.parent__sourceInstanceName);
  const items = data?.allFile?.nodes?.map((n) => {
    const createDateText = DateTime.fromISO(
      n?.childMarkdownRemark?.frontmatter?.createDate ?? '1900-01-01',
    ).toFormat('yyyy/MM/dd');
    const updateDateText = DateTime.fromISO(
      n?.childMarkdownRemark?.frontmatter?.updateDate ?? '1900-01-01',
    ).toFormat('yyyy/MM/dd');
    const timeStamp =
      createDateText === updateDateText
        ? `${createDateText}作成`
        : `${createDateText}作成（${updateDateText}）更新`;
    return {
      meta: timeStamp,
      title: n?.childMarkdownRemark?.frontmatter?.title ?? 'タイトル不明',
      link: n?.childMarkdownRemark?.link ?? undefined,
      contents:
        n?.childMarkdownRemark?.excerpt == null ? undefined : [n?.childMarkdownRemark?.excerpt],
    };
  });

  return (
    <Layout pageTitle={title} pageDescription={title}>
      <Title>{title}</Title>
      <ItemList items={items} />
    </Layout>
  );
};
export default Posts;

export const query = graphql`
  query Posts($sin: String) {
    allFile(
      filter: { sourceInstanceName: { eq: $sin }, childMarkdownRemark: { id: { ne: null } } }
      sort: { order: DESC, fields: childrenMarkdownRemark___frontmatter___updateDate }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            createDate
            updateDate
          }
          excerpt
          link: gatsbyPath(
            filePath: "/{MarkdownRemark.parent__(File)__sourceInstanceName}/{MarkdownRemark.parent__(File)__name}"
          )
        }
      }
    }
  }
`;
