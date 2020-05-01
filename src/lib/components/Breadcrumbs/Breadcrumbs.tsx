import './Breadcrumbs.css';

import React from 'react';

import { RightArrowIcon } from '../../icons/RightArrowIcon';

interface BreadcrumbsProps {
  items: {
    id: string;
    content: React.ReactNode;
  }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="eui-breadcrumbs">
      {items.map((item, index) => (
        <div className="eui-breadcrumbs__item" key={item.id}>
          <div className="eui-breadcrumbs__content">{item.content}</div>

          {index !== items.length - 1 ? (
            <div className="eui-breadcrumbs__arrow">
              <RightArrowIcon />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
