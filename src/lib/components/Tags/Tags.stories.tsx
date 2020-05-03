import React from 'react';

import { initTheme } from '../../tools/initTheme';

import { Tags } from './Tags';
import { BrowserRouter, Link } from 'react-router-dom';

initTheme();

export default {
  component: Tags,
  title: 'Components/Tags',
};

export const Default = () => (
  <React.Fragment>
    <div style={{ marginBottom: 10 }}>
      <Tags
        size="l"
        list={[
          { content: 'fruits', isCategory: true },
          { content: 'banana' },
          { content: 'yuogurt', isActive: true },
          { content: 'orange' },
          { content: 'apple', onClick: item => alert(`item id = ${JSON.stringify(item)}`), options: { a: 'b' } },
          { content: 'companies', isCategory: true },
          { content: 'microsoft' },
          { content: 'apple' },
          { content: 'yandex' },
          { content: 'facebook' },
        ]}
      />
    </div>
    <div style={{ marginBottom: 10 }}>
      <Tags
        list={[
          { content: 'fruits', isCategory: true },
          { content: 'banana' },
          { content: 'yuogurt', isActive: true },
          { content: 'orange' },
          { content: 'apple', onClick: item => alert(`item id = ${JSON.stringify(item)}`), options: { a: 'b' } },
          { content: 'companies', isCategory: true },
          { content: 'microsoft' },
          { content: 'apple' },
          { content: 'yandex' },
          { content: 'facebook' },
        ]}
      />
    </div>
    <div style={{ marginBottom: 10 }}>
      <Tags
        size="s"
        list={[
          { content: 'fruits', isCategory: true },
          { content: 'banana' },
          { content: 'yuogurt', isActive: true },
          { content: 'orange' },
          { content: 'apple', onClick: item => alert(`item id = ${JSON.stringify(item)}`), options: { a: 'b' } },
          { content: 'companies', isCategory: true },
          { content: 'microsoft' },
          { content: 'apple' },
          { content: 'yandex' },
          { content: 'facebook' },
        ]}
      />
    </div>
  </React.Fragment>
);

export const RouterLink = () => (
  <BrowserRouter>
    <div style={{ marginBottom: 10 }}>
      <Tags
        list={[
          { content: 'fruits', isCategory: true },
          { content: <Link to="/abc">to abc</Link> },
          { content: 'yuogurt' },
          { content: 'orange' },
          { content: 'apple', onClick: item => alert(`item id = ${JSON.stringify(item)}`), options: { a: 'b' } },
          { content: 'companies', isCategory: true },
          { content: 'microsoft' },
          { content: 'apple' },
          { content: 'yandex' },
          { content: 'facebook' },
        ]}
      />
    </div>
  </BrowserRouter>
);
