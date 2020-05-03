import './RadioButton.css';

import React, { useState } from 'react';

import cn from 'classnames';
import b_ from 'b_';

import { Button, ButtonCorners, ButtonSize } from '../Button';

const b = b_.lock('eui-radiobutton');

interface RadioButtonProps {
  size?: ButtonSize;
  activeId: string;
  onChange: (id: string) => void;
  options: {
    id: string;
    title: string;
  }[];
}

const firstItemCorners: ButtonCorners = ['round', 'square', 'square', 'round'];
const intermediateItemCorners: ButtonCorners = ['square', 'square', 'square', 'square'];
const lastItemCorners: ButtonCorners = ['square', 'round', 'round', 'square'];

function getButtonCorners(index: number, lastIndex: number) {
  if (index === 0) {
    return firstItemCorners;
  }

  if (index === lastIndex) {
    return lastItemCorners;
  }

  return intermediateItemCorners;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ activeId, options, size, onChange }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(options.findIndex(el => el.id === activeId));

  return (
    <div className={b()}>
      {options.map((option, index) => {
        const isActive = activeItemIndex === index;

        return (
          <div key={option.id} className={cn(b('item'), b('item', { active: isActive }))}>
            <Button
              as="button"
              theme={isActive ? 'active' : undefined}
              size={size || 'm'}
              corners={getButtonCorners(index, options.length - 1)}
              onClick={() => {
                setActiveItemIndex(index);

                onChange(option.id);
              }}
            >
              {option.title}
            </Button>
          </div>
        );
      })}
    </div>
  );
};
