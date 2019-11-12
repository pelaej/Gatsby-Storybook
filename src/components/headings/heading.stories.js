import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './heading';

const bgSpacing = {
  padding: '24px'
}

storiesOf('Components|Atoms/Headings', module)
  .add('all', () => {
    return (
      <div style={bgSpacing}>
        <Heading level="h1">Ostrich h1</Heading>
        <Heading level="h1" styles="inline">Ostrich Inline h1</Heading>
        <Heading level="h2">Ostrich h2</Heading>
        <Heading level="h2" styles="inline">Ostrich Inline h2</Heading>
        <Heading level="h3">Ostrich h3</Heading>
        <Heading level="h3" styles="din-2014">DIN 2014 h3</Heading>
        <Heading level="h4">DIN 2014 h4</Heading>
        <Heading level="h4" styles="light">DIN 2014 Light h4</Heading>
        <Heading level="h5">DIN 2014 h5</Heading>
        <Heading level="h5" styles="light">DIN 2014 Light h5</Heading>
        <Heading level="h6">DIN 2014 h6</Heading>
        <Heading level="h6" styles="light">DIN 2014 Light h6</Heading>
      </div>
    )
  })
  .add('h1', () => {
    return (
      <div style={bgSpacing}>
        <Heading level="h1">Ostrich h1</Heading>
        <Heading level="h1" styles="inline">Ostrich Inline h1</Heading>
      </div>
    )
  })
  .add('h2', () => {
    return (
      <div style={bgSpacing}>
        <Heading level="h2">Ostrich h2</Heading>
        <Heading level="h2" styles="inline">Ostrich Inline h2</Heading>
      </div>
    )
  })
  .add('h3', () => {
    return (
      <div style={bgSpacing}>
        <Heading level="h3">Ostrich h3</Heading>
        <Heading level="h3" styles="din-2014">DIN 2014 h3</Heading>
      </div>
    )
  })
  .add('h4', () => {
    return (
      <div style={bgSpacing}>
        <Heading level="h4">DIN 2014 h4</Heading>
        <Heading level="h4" styles="light">DIN 2014 Light h4</Heading>
      </div>
    )
  })
  .add('h5', () => {
    return (
      <div style={bgSpacing}>
        <Heading level="h5">DIN 2014 h5</Heading>
        <Heading level="h5" styles="light">DIN 2014 Light h5</Heading>
      </div>
    )
  })
  .add('h6', () => {
    return (
      <div style={bgSpacing}>
        <Heading level="h6">DIN 2014 h6</Heading>
        <Heading level="h6" styles="light">DIN 2014 Light h6</Heading>
      </div>
    )
  });