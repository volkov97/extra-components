import './TextLink.css';

import React from 'react';

import cn from 'classnames';
import b_ from 'b_';

const b = b_.lock('eui-textlink');

interface TextLinkProps extends React.ComponentProps<'a'> {
  hasUnderline?: boolean;
}

export const TextLink: React.FC<TextLinkProps> = props => {
  const { hasUnderline = false, className, children, ...rest } = props;

  const cls = cn(className, b({ underline: hasUnderline }));

  if (typeof props.children !== 'string') {
    const childrenWithProps = React.Children.map(
      children,
      child => React.isValidElement(child) && React.cloneElement(child, { className: cls }),
    );

    return childrenWithProps?.length === 1 ? childrenWithProps[0] : null;
  }

  return (
    <a className={cls} rel={props.target === '_blank' ? 'noopener noreferrer' : undefined} {...rest}>
      <span>{children}</span>
    </a>
  );
};
