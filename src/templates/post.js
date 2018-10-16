import {graphql} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layouts';

import styles from './post.module.css';

const PostTemplate = ({data}) => {
  console.log(data);
  const {
    html,
    fields: {date},
    frontmatter: {title},
  } = data.markdownRemark;

  return (
    <Layout>
      <article className={styles.container}>
        <h1>
          <time>{date}</time>: {title}
        </h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{__html: html}} />
      </article>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      fields {
        date
      }
      frontmatter {
        title
      }
    }
  }
`;
