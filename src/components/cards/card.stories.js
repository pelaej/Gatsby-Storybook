import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductSetcard from './productSetcard';

const bgSpacing = {
  padding: '24px'
}

storiesOf('Components|Organisms/Cards', module)
  .add('product setcard', () => {
    return (
      <div style={bgSpacing}>
        <ProductSetcard />
      </div>
    )
  });