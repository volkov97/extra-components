import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { initTheme } from '../../tools/initTheme';

import { Breadcrumbs } from './Breadcrumbs';
import { TextLink } from '../TextLink';

initTheme();

export default {
  component: Breadcrumbs,
  title: 'Core/Breadcrumbs',
};

export const Default = () => (
  <BrowserRouter>
    <div style={{ marginBottom: 10 }}>
      <Breadcrumbs
        items={[
          {
            id: 'home',
            content: (
              <TextLink>
                <Link to="/abc">Home</Link>
              </TextLink>
            ),
          },
          { id: 'tricks', content: 'Tricks' },
          { id: 'home', content: 'Cool' },
          { id: 'tricks', content: 'Element from point' },
        ]}
      />
    </div>
  </BrowserRouter>
);
