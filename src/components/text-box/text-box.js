import React from 'react';
// import PropTypes from 'prop-types';

import Flag from '../flags/flag';
// import Heading from '../headings/heading';
// import Button from '../buttons/button';

import './text-box.scss';


class TextBox extends React.Component {
  render() {
    return (
      <div className="text-box">
        <Flag text="Instant Rebate" color="cyan" />
      </div>
    )
  }
}

export default TextBox;