import React from 'react';
import { action as e } from '@storybook/addon-actions';

import { Button } from './Button';

export default {
  component: Button,
  title: 'Core/Button',
};

export const Default = () => <Button onClick={e('clicked')}>More</Button>;
