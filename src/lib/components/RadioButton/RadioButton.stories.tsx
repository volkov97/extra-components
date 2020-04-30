import React from 'react';

import { initTheme } from '../../tools/initTheme';

import { RadioButton } from './RadioButton';

initTheme();

export default {
  component: RadioButton,
  title: 'Components/RadioButton',
};

export const Default = () => (
  <React.Fragment>
    <div style={{ marginBottom: 10 }}>
      <RadioButton
        size="l"
        activeId="a"
        options={[
          { id: 'a', title: 'a' },
          { id: 'b', title: 'b' },
          { id: 'c', title: 'c' },
        ]}
      />
    </div>
    <div style={{ marginBottom: 10 }}>
      <RadioButton
        activeId="b"
        options={[
          { id: 'a', title: 'a' },
          { id: 'b', title: 'b' },
          { id: 'c', title: 'c' },
        ]}
      />
    </div>
    <div style={{ marginBottom: 10 }}>
      <RadioButton
        size="s"
        activeId="c"
        options={[
          { id: 'a', title: 'a' },
          { id: 'b', title: 'b' },
          { id: 'c', title: 'c' },
        ]}
      />
    </div>
  </React.Fragment>
);
