import {Link} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './paginator.module.scss';

const Paginator = ({prev, next}) => (
  <div className={styles.paginator}>
    {prev && (
      <Link to={prev} className={styles.prevLink}>
        prev
      </Link>
    )}
    {prev && next && '|'}
    {next && (
      <Link to={next} className={styles.nextLink}>
        next
      </Link>
    )}
  </div>
);

Paginator.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
};

Paginator.defaultProps = {
  prev: null,
  next: null,
};

export default Paginator;
