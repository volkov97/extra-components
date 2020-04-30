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
    <div className="tn-breadcrumbs">
      {items.map((item, index) => (
        <div className="tn-breadcrumbs__item" key={item.id}>
          <div className="tn-breadcrumbs__content">{item.content}</div>

          {index !== items.length - 1 ? (
            <div className="tn-breadcrumbs__arrow">
              <ArrowIcon />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
