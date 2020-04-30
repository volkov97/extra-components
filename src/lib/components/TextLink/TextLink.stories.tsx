import React from 'react';
import { action as e } from '@storybook/addon-actions';

import { initTheme } from '../../tools/initTheme';

import { TextLink } from './TextLink';

initTheme();

export default {
  component: TextLink,
  title: 'Components/TextLink',
};

export const Default = () => (
  <React.Fragment>
    <div style={{ marginBottom: 10, width: 300 }}>
      Lorem ipsum dolor sit amet{' '}
      <TextLink href="#" hasUnderline={true}>
        consectetur adipisicing
      </TextLink>{' '}
      elit. Assumenda, illum ab fugiat in, illo qui a culpa quidem ut hic velit.{' '}
      <TextLink href="#">Nam illum in deserunt</TextLink> deleniti possimus et maiores vitae? Lorem ipsum dolor sit amet{' '}
      <TextLink href="#">consectetur</TextLink> adipisicing elit.{' '}
      <TextLink href="#">Perferendis deleniti exercitationem harum!</TextLink> Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Esse optio odit nemo ab, impedit at, soluta maxime neque fugit asperiores deserunt porro error
      eaque? Recusandae quaerat totam quia soluta a!
    </div>
  </React.Fragment>
);
