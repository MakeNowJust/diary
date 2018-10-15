import {graphql, Link} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layouts';
import Paginator from '../components/paginator';

import styles from './list.module.css';

const ListTemplate = ({data, pageContext}) => {
  const posts = data.allMarkdownRemark.edges.map(({node}) => (
    <li key={node.id} className={styles.post}>
      <article>
        <h2>
          <Link to={node.fields.slug}>
            <time>{node.fields.date}</time>: {node.frontmatter.title}
          </Link>
        </h2>
        <p>{node.excerpt}</p>
      </article>
    </li>
  ));

  const {currentListPage: current, listPages} = pageContext;
  const previous = current === 1 ? null : current === 2 ? `/` : `/list/${current - 1}/`;
  const next = current === listPages ? null : `/list/${current + 1}/`;

  return (
    <Layout>
      <div className={styles.container}>
        <h1>{`post list [${current}/${listPages}]:`}</h1>
        <Paginator previous={previous} next={next} />
        <ul>{posts}</ul>
        <Paginator previous={previous} next={next} />
      </div>
    </Layout>
  );
};

ListTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default ListTemplate;

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(sort: {fields: [fields___slug], order: DESC}, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
            date
          }
          excerpt(truncate: true)
        }
      }
    }
  }
`;
