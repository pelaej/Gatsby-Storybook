import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = props => (
  <button className={`button ${props.styles}`}>{props.text}</button>
);

Button.propTypes = {
  styles: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Button;