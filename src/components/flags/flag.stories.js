import React from 'react';
import { storiesOf } from '@storybook/react';
import Flag from './flag';

const bgSpacing = {
  padding: '24px'
}

const spaceBetween = {
  marginRight: '16px'
};

const bgGray = {
  backgroundColor: '#f2f2f4',
  padding: '24px'
};

storiesOf('Components|Atoms/Flags/Production Status', module)
  .add('all', () => {
    return (
      <div style={bgSpacing}>
        <span style={spaceBetween}><Flag text="Coming Soon" color="orange" /></span>
        <span style={spaceBetween}><Flag text="New" color="magenta" /></span>
        <span style={spaceBetween}><Flag text="Expiring" color="red" /></span>
        <Flag text="Discontinued" color="gray" />
      </div>
    )
  })
  .add('coming soon', () => <div style={bgSpacing}><Flag text="Coming Soon" color="orange" /></div>)
  .add('new', () => <div style={bgSpacing}><Flag text="New" color="magenta" /></div>)
  .add('expiring', () => <div style={bgSpacing}><Flag text="Expiring" color="red" /></div>)
  .add('discontinued', () => <div style={bgSpacing}><Flag text="Discontinued" color="gray" /></div>);

storiesOf('Components|Atoms/Flags/Special Promotion', module)
  .add('all / default', () => {
    return (
      <div style={bgSpacing}>
        <span style={spaceBetween}><Flag text="Instant Rebate" color="cyan" /></span>
        <span style={spaceBetween}><Flag text="Sale" color="cyan" /></span>
        <Flag text="20% Off" color="cyan" />
      </div>
    )
  });

storiesOf('Components|Atoms/Flags/Product Components', module)
  .add('front-end / end user', () => {
    return (
      <div style={bgSpacing}>
        <span style={spaceBetween}><Flag text="Transmitter" color="green" /></span>
        <span style={spaceBetween}><Flag text="PSM Receiver" color="green" /></span>
        <span style={spaceBetween}><Flag text="Discussion Unit" color="green" /></span>
        <Flag text="Flush Mount" color="green" />
      </div>
    )
  })
  .add('back-end / system manager', () => {
    return (
      <div style={bgSpacing}>
        <span style={spaceBetween}><Flag text="Receiver" color="blue" /></span>
        <span style={spaceBetween}><Flag text="PSM Transmitter" color="blue" /></span>
        <span style={spaceBetween}><Flag text="Central Unit" color="blue" /></span>
        <span style={spaceBetween}><Flag text="Radiator" color="blue" /></span>
      </div>
    )
  })
  .add('required functionality enhancers / highly recommended accessories', () => {
    return (
      <div style={bgSpacing}>
        <span style={spaceBetween}><Flag text="Power Management" color="yellow" /></span>
        <span style={spaceBetween}><Flag text="Spectrum Management" color="yellow" /></span>
        <Flag text="Access Point" color="yellow" />
      </div>
    )
  });

storiesOf('Components|Atoms/Flags/Software', module)
  .add('default', () => <div style={bgSpacing}><Flag text="Software" color="purple" /></div>);

storiesOf('Components|Atoms/Flags/Optional Accessories & Parts', module)
  .add('all / default', () => {
    return (
      <div style={bgGray}>
        <span style={spaceBetween}><Flag text="Accessory" color="white" /></span>
        <Flag text="Part" color="white" />
      </div>
    )
  });
