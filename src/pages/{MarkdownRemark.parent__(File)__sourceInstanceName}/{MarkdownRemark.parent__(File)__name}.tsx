import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';

const Post: React.FC<{ data: GatsbyTypes.PostQuery }> = ({ data }) => {
  return (
    <Layout>
      <p>{data?.markdownRemark?.frontmatter?.title}</p>
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
    }
  }
`;
