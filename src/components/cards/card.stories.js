import React from 'react';
import { storiesOf } from '@storybook/react';

import ProductSetcard from './productSetcard';

const bgSpacing = {
  padding: '24px'
}

storiesOf('Components|Organisms/Cards', module)
  .add('product setcard', () => (
      <div style={bgSpacing}>
        <ProductSetcard />
      </div>
    ),
    {
      'in-dsm': {
        id: '5dea80c7157801e95786a973'
      }
    }
  );