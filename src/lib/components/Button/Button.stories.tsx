import React from 'react';
import { action as e } from '@storybook/addon-actions';

import { initTheme } from '../../tools/initTheme';

import { Button } from './Button';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

initTheme();

export default {
  component: Button,
  title: 'Components/Button',
};

export const Sizes = () => (
  <React.Fragment>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" onClick={e('clicked')} size="s">
        More size S
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" onClick={e('clicked')}>
        More size M
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" onClick={e('clicked')} size="l">
        More size L
      </Button>
    </div>
  </React.Fragment>
);

export const Active = () => (
  <React.Fragment>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" onClick={e('clicked')}>
        Not active
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" theme="active" onClick={e('clicked')}>
        Active
      </Button>
    </div>
  </React.Fragment>
);

export const Links = () => (
  <React.Fragment>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" onClick={e('clicked')}>
        Not a link
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="a" theme="active" onClick={e('clicked')} href="#" target="_blank">
        Link
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="a" size="s" href="#" target="_blank">
        Link
      </Button>
    </div>
  </React.Fragment>
);

export const Disabled = () => (
  <React.Fragment>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" theme="disabled" size="l">
        Disabled action
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" theme="disabled" size="m">
        Disabled action
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" theme="disabled" size="s">
        Disabled action
      </Button>
    </div>
  </React.Fragment>
);

export const ReactRouterLinks = () => (
  <React.Fragment>
    <BrowserRouter>
      <div>
        <Button as="custom" size="l">
          <Link to="/">Link to main</Link>
        </Button>

        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => (
              <Button as="custom" size="s">
                <Link to="/more">Router link to more section</Link>
              </Button>
            )}
          />
          <Route
            path="/more"
            exact={true}
            render={() => (
              <Button as="custom" size="s">
                <Link to="/">Router link to home</Link>
              </Button>
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  </React.Fragment>
);

export const Corners = () => (
  <React.Fragment>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" corners={['square', 'round', 'round', 'round']}>
        Left top
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" corners={['round', 'square', 'round', 'round']}>
        Left top
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" corners={['round', 'round', 'square', 'round']}>
        Left top
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" corners={['round', 'round', 'round', 'square']}>
        Left top
      </Button>
    </div>

    <div style={{ marginBottom: 10 }}>
      <Button as="button" corners={['circle', 'round', 'round', 'round']}>
        Left top
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" corners={['round', 'circle', 'round', 'round']}>
        Left top
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" corners={['round', 'round', 'circle', 'round']}>
        Left top
      </Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <Button as="button" corners={['round', 'round', 'round', 'circle']}>
        Left top
      </Button>
    </div>
  </React.Fragment>
);
