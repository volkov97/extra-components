import './Button.css';

import React, { PropsWithChildren, ReactElement } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import cn from 'classnames';
import b_ from 'b_';

const b = b_.lock('tn-button');

type ButtonSize = 's' | 'm' | 'l';

interface CustomButtonProps {
  className?: string;
  size?: ButtonSize;
  isActive?: boolean;
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

export const Button: React.FC<ButtonProps> = props => {
  const { className, size, isActive, as, ...restProps } = props;

  const bemClassnames = b({
    size: size || 'm',
    active: !!isActive,
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
