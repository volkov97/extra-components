import './Button.css';

import React from 'react';

import cn from 'classnames';
import b_ from 'b_';

const b = b_.lock('eui-button');

export type ButtonSize = 's' | 'm' | 'l';
export type CornerType = 'circle' | 'round' | 'square';
export type ButtonCorners = [CornerType, CornerType, CornerType, CornerType];

interface CustomButtonProps {
  className?: string;
  size?: ButtonSize;
  theme?: 'active' | 'disabled';
  corners?: ButtonCorners;
}

interface ButtonTypeButtonProps extends React.ComponentProps<'button'>, CustomButtonProps {
  as: 'button';
}

interface ButtonTypeLinkProps extends React.ComponentProps<'a'>, CustomButtonProps {
  as: 'a';
}

interface ButtonCustomProps extends CustomButtonProps {
  as: 'custom';
}

type ButtonProps = ButtonTypeButtonProps | ButtonTypeLinkProps | ButtonCustomProps;

const defaultCorners: ButtonCorners = ['round', 'round', 'round', 'round'];

export const Button: React.FC<ButtonProps> = props => {
  const { className, size, theme, as, corners = defaultCorners, ...restProps } = props;

  const bemClassnames = b({
    size: size || 'm',
    active: theme === 'active',
    disabled: theme === 'disabled',
    'corner-top-left': corners[0],
    'corner-top-right': corners[1],
    'corner-bottom-right': corners[2],
    'corner-bottom-left': corners[3],
  });

  const cls = cn(bemClassnames, 'button-reset', className);

  if (props.as === 'custom') {
    const { children } = props;

    const childrenWithProps = React.Children.map(
      children,
      child => React.isValidElement(child) && React.cloneElement(child, { className: cls }),
    );

    return childrenWithProps?.length === 1 ? childrenWithProps[0] : null;
  }

  const linkProps = { className: cls, ...restProps };

  return React.createElement(as, linkProps as React.ComponentProps<'button' & 'a'>);
};
