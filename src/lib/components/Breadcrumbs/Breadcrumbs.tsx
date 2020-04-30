import './Breadcrumbs.css';

import React from 'react';

import { ArrowIcon } from './components/ArrowIcon';

interface BreadcrumbsProps {
  items: {
    id: string;
    content: React.ReactNode;
  }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="ec-breadcrumbs">
      {items.map((item, index) => (
        <div className="ec-breadcrumbs__item" key={item.id}>
          <div className="ec-breadcrumbs__content">{item.content}</div>

          {index !== items.length - 1 ? (
            <div className="ec-breadcrumbs__arrow">
              <ArrowIcon />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
