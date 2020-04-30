import React from 'react';

import { initTheme } from '../../tools/initTheme';

import { Tags } from './Tags';

initTheme();

export default {
  component: Tags,
  title: 'Components/Tags',
};

export const Default = () => (
  <div style={{ marginBottom: 10 }}>
    <Tags />
  </div>
);
