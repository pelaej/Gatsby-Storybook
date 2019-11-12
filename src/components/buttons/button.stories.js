import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Button from './button';

// layout styles
const bgSpacing = {
  padding: '24px'
};

// knobs addon
const options = {
  'Default': '',
  'Tall': 'button--tall',
  'Tile': 'button--tile',
  'Tile Tall': 'button--tile button--tall'
};

storiesOf('Components|Atoms/Buttons', module)
  .add('default', () => {
    return (
      <div style={bgSpacing}>
        <Button text={text('Label', 'Add to Cart')} styles={select('Type', options)} />
      </div>
    )
  });