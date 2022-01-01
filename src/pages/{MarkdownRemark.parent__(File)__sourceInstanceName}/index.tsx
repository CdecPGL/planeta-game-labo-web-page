import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
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
  return (
    <Layout>
      <Title>{getTitle(params.parent__sourceInstanceName)}</Title>
      <div className='mb-12 bg-slate-50'>
        {data?.allFile?.nodes?.map((n) => {
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
          return (
            <div className='p-5'>
              <p className='text-sm mb-1'>{timeStamp}</p>
              <Link to={n?.childMarkdownRemark?.link ?? ''}>
                <Heading>{n?.childMarkdownRemark?.frontmatter?.title}</Heading>
              </Link>
              <Paragraph>{n?.childMarkdownRemark?.excerpt}</Paragraph>
            </div>
          );
        })}
      </div>
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
