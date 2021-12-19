import { DateTime } from 'luxon';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const NotificationArea: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.NotificationAreaQuery>(graphql`
    query NotificationArea {
      allFile(
        filter: {
          sourceInstanceName: { eq: "notifications" }
          childMarkdownRemark: { id: { ne: null } }
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              createDate
            }
            excerpt
          }
        }
      }
    }
  `);

  return (
    <>
      <h2>お知らせ</h2>
      {data.allFile.nodes.map((n, i) => (
        <dl key={i}>
          <dt>
            {DateTime.fromISO(
              n.childMarkdownRemark?.frontmatter?.createDate ?? '1900-01-01',
            ).toFormat('yyyy年M月d日')}
            　<a href={n.link}>{n?.childMarkdownRemark?.frontmatter?.title}</a>
          </dt>
          {i === 0 && <dd>{n?.childMarkdownRemark?.excerpt}</dd>}
        </dl>
      ))}
    </>
  );

  return <></>;
};
export default NotificationArea;
