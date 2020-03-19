import React from 'react';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {ViewDecorator, ThemeDecorator} from './../../storybook/components';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(ViewDecorator)
  .addDecorator(ThemeDecorator)
  .add('default', () => <Button onPress={action('onPress')}>Press me</Button>)
  .add('primary', () => (
    <Button color="primary" onPress={action('onPress')}>
      Press me
    </Button>
  ))
  .add('secondary', () => (
    <Button color="secondary" onPress={action('onPress')}>
      Press me
    </Button>
  ))
  .add('primary-reverse', () => (
    <Button color="primary-reverse" onPress={action('onPress')}>
      Press me
    </Button>
  ))
  .add('link', () => (
    <Button color="link" onPress={action('onPress')}>
      Press me
    </Button>
  ));
