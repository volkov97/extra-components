import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = props => (
  <button type="button" {...props}>
    i am button
  </button>
);
