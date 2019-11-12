import React from 'react';
import PropTypes from 'prop-types';

import './flag.scss';

const Flag = props => (
  <div className={`flag flag--${props.color}`}>{props.text}</div>
);

Flag.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Flag;