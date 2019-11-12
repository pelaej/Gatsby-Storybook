import React from 'react';
import PropTypes from 'prop-types';

import './heading.scss';

const Heading = (props) => {
  const { level, styles } = props;
  const validHTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const HTag = validHTags.includes(level.toLowerCase()) ? level.toLowerCase() : '';

  return (
    <HTag className={styles}>
      {props.children}
    </HTag>
  )
}

Heading.propTypes = {
  level: PropTypes.string.isRequired,
  styles: PropTypes.string
}

export default Heading;