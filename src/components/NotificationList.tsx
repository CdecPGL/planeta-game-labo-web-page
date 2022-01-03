import React from 'react';
import { DateTime } from 'luxon';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Paragraph from './Paragraph';

const NotificationList: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.NotificationAreaQuery>(graphql`
    query NotificationArea {
      allFile(
        filter: {
          sourceInstanceName: { eq: "notifications" }
          childMarkdownRemark: { id: { ne: null } }
        }
        sort: { order: DESC, fields: childrenMarkdownRemark___frontmatter___updateDate }
        limit: 3
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              createDate
            }
            excerpt
            link: gatsbyPath(
              filePath: "/{MarkdownRemark.parent__(File)__sourceInstanceName}/{MarkdownRemark.parent__(File)__name}"
            )
          }
        }
      }
    }
  `);

  return (
    <div className='mb-6'>
      {data.allFile.nodes.map((n, i) => (
        <dl key={i}>
          <dt>
            {DateTime.fromISO(
              n.childMarkdownRemark?.frontmatter?.createDate ?? '1900-01-01',
            ).toFormat('yyyy年M月d日')}
            <Link to={n?.childMarkdownRemark?.link ?? ''} className='ml-2'>
              {n?.childMarkdownRemark?.frontmatter?.title}
            </Link>
          </dt>
          {i === 0 && (
            <dd className='ml-10'>
              <Paragraph>{n?.childMarkdownRemark?.excerpt}</Paragraph>
            </dd>
          )}
        </dl>
      ))}
      <div className='mt-4'>
        <Link to='/notifications'>過去のお知らせを見る</Link>
      </div>
    </div>
  );
};
export default NotificationList;
