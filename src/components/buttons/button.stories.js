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
  'Short': '',
  'Tall': 'button--tall'
};


// storiesOf('Components|Atoms/Buttons', module)
//   .add('default', () => (
//       <div style={bgSpacing}>
//         <Button text={text('Label', 'Add to Cart')} styles={select('Type', options)} />
//       </div>
//     ),
//     {
//       'in-dsm': {
//         id: '5dcc4fae2cea662481457118'
//       }
//     }
//   );

storiesOf('Components|Atoms/Buttons', module)
  .add('standard', () => (
    <div style={bgSpacing}>
      <Button text={text('Label', 'Add to Cart')} styles={select('Type', options)} />
    </div>
  ),
    {
      'in-dsm': {
        id: '5dcc4fae2cea662481457118'
      }
    }
  );

storiesOf('Components|Atoms/Buttons', module)
  .add('tile', () => (
    <div style={bgSpacing}>
      <Button text={text('Label', 'Add to Cart')} styles={"button--tile "+select('Type', options)} />
    </div>
  ),
    {
      'in-dsm': {
        id: '5dcc509e0008490cb9a33eec'
      }
    }
  );