import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';

const Posts: React.FC<{ data: GatsbyTypes.PostsQuery }> = ({ data }) => {
  return <Layout>Posts</Layout>;
};
export default Posts;

export const query = graphql`
  query Posts($sin: String) {
    allFile(
      filter: { sourceInstanceName: { eq: $sin }, childMarkdownRemark: { id: { ne: null } } }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            createDate
            updateDate
          }
        }
      }
    }
  }
`;
