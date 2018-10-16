import {Link} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './paginator.module.scss';

const Paginator = ({previous, next}) => (
  <div className={styles.paginator}>
    {previous && (
      <Link to={previous} className={styles.previousLink}>
        previous
      </Link>
    )}
    {previous && next && '|'}
    {next && (
      <Link to={next} className={styles.nextLink}>
        next
      </Link>
    )}
  </div>
);

Paginator.propTypes = {
  previous: PropTypes.oneOf([PropTypes.string, null]).isRequired,
  next: PropTypes.oneOf([PropTypes.string, null]).isRequired,
};

export default Paginator;
