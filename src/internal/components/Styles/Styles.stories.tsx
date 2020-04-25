import './Styles.stories.css';

import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default {
  title: 'Styles/Design System',
};

export const Headings = () => (
  <div className="wrap">
    <h1 className="h1">.h1</h1>
    <h2 className="h2">.h2</h2>
    <h3 className="h3">.h3</h3>
    <h4 className="h4">.h4</h4>
    <h5 className="h5">.h5</h5>
    <h6 className="h6">.h6</h6>
  </div>
);

export const Text = () => (
  <div className="wrap">
    <p className="text-m">.text-m</p>
    <p className="text-s">.text-s</p>
    <p className="text-xs">.text-xs</p>
  </div>
);

const ColorShowcase: React.FC<{ name: string }> = ({ name }) => (
  <div className="color-showcase">
    <div className="color-showcase__colors">
      <div className="color-showcase__row">
        <CopyToClipboard text={`var(--tn-color-${name})`}>
          <div
            className="color-showcase__row-item"
            style={{
              backgroundColor: `var(--tn-color-${name})`,
            }}
          >
            #{name}
          </div>
        </CopyToClipboard>
      </div>
      <div className="color-showcase__row">
        <CopyToClipboard text={`var(--tn-color-${name}-light)`}>
          <div
            className="color-showcase__row-item"
            style={{
              backgroundColor: `var(--tn-color-${name}-light)`,
            }}
          >
            #{name}
            -light
          </div>
        </CopyToClipboard>
        <CopyToClipboard text={`var(--tn-color-${name}-semilight)`}>
          <div
            className="color-showcase__row-item"
            style={{
              backgroundColor: `var(--tn-color-${name}-semilight)`,
            }}
          >
            #{name}
            -semilight
          </div>
        </CopyToClipboard>
        <CopyToClipboard text={`var(--tn-color-${name}-dark)`}>
          <div
            className="color-showcase__row-item"
            style={{
              backgroundColor: `var(--tn-color-${name}-dark)`,
            }}
          >
            #{name}
            -dark
          </div>
        </CopyToClipboard>
      </div>
    </div>
    <div className="color-showcase__name">#{name}</div>
  </div>
);

export const Colors = () => (
  <div className="colors">
    <div className="colors__text h2">
      Use tn colors via css-variables
      <br />
      <span style={{ color: 'var(--tn-color-red-semilight)' }}>
        var(--tn-color-
        <span style={{ color: 'var(--tn-color-red-dark)' }}>red-semilight</span>)
      </span>
    </div>

    <div className="colors__text">
      <div className="h4">Click on colored rectangle to copy css variable string</div>
    </div>

    <div className="colors__row">
      {['black', 'charcoal-grey', 'steel', 'cloudy-blue', 'ice-blue', 'very-light-gray', 'white'].map(
        (colorName: string) => (
          <CopyToClipboard text={`var(--tn-color-${colorName})`} key={colorName}>
            <div className="colors__item">
              <div
                className="colors__item-color"
                style={{
                  backgroundColor: `var(--tn-color-${colorName})`,
                }}
              />
              <div className="colors__item-title">#{colorName}</div>
            </div>
          </CopyToClipboard>
        ),
      )}
    </div>

    <div className="colors__row">
      <ColorShowcase name="red" />
      <ColorShowcase name="pink" />
      <ColorShowcase name="orange" />
      <ColorShowcase name="yellow" />
      <ColorShowcase name="azure" />
      <ColorShowcase name="blue" />
      <ColorShowcase name="green" />
      <ColorShowcase name="lime" />
    </div>
  </div>
);

export const Shadows = () => (
  <div className="shadows">
    {['outlined', 's', 'm', 'l', 'xl'].map(type => (
      <div key={type} className={`shadows__item shadow-${type}`}>
        {type}
      </div>
    ))}
  </div>
);

export const Spacing = () => (
  <div className="spacing">
    {[
      'xxxs',
      'xxs',
      'xs',
      's',
      'm',
      'l',
      'xl',
      'xxl',
      'xxxl',
      'xxxxl',
      'xxxxxl',
      'xxxxxxl',
      'xxxxxxxl',
      'xxxxxxxxl',
      'xxxxxxxxxl',
      'xxxxxxxxxxl',
      'xxxxxxxxxxxl',
      'xxxxxxxxxxxxl',
      'xxxxxxxxxxxxxl',
      'xxxxxxxxxxxxxxl',
      'xxxxxxxxxxxxxxxl',
    ].map(space => (
      <div key={space} className="spacing__item">
        <div className="spacing__title">{space}</div>
        <div className="spacing__item-showcase" style={{ width: `var(--space-${space})` }} />
      </div>
    ))}
  </div>
);

export const BorderRadius = () => <div className="border-radius">border-radius</div>;
