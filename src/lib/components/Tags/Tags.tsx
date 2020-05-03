import './Tags.css';

import React from 'react';

import b_ from 'b_';
import cn from 'classnames';

import { RightArrowIcon } from '../../icons/RightArrowIcon';
import { ButtonSize } from '../Button';

const b = b_.lock('eui-tags');

export type TagOptions = { [key: string]: any };

export interface Tag {
  content: React.ReactNode;
  isCategory?: boolean;
  isActive?: boolean;
  onClick?: (options: TagOptions) => void;
  options?: TagOptions;
}

export interface TagsProps {
  size?: ButtonSize;
  list: Tag[];
}

export const Tags: React.FC<TagsProps> = ({ list, size }) => {
  return (
    <div className={b()}>
      {list.map((tag, index) => {
        const tagInnerCls = cn(
          b('tag-inner', { category: !!tag.isCategory, active: !!tag.isActive, size: size || 'm' }),
          'button-reset',
        );

        const onClick = () => {
          if (tag.onClick) {
            tag.onClick(tag.options || {});
          }
        };

        if (typeof tag.content !== 'string' && React.isValidElement(tag.content)) {
          const childrenWithProps = React.Children.map(
            tag.content,
            child =>
              React.isValidElement(child) && (
                <React.Fragment>
                  {React.cloneElement(child, { className: tagInnerCls })}

                  {tag.isCategory ? <RightArrowIcon /> : null}
                </React.Fragment>
              ),
          );

          return childrenWithProps?.length === 1 ? (
            <div key={index} className={b('tag')} onClick={onClick}>
              {childrenWithProps[0]}
            </div>
          ) : null;
        }

        return (
          <div key={index} className={b('tag')} onClick={onClick}>
            <button className={tagInnerCls}>
              {tag.content}

              {tag.isCategory ? <RightArrowIcon /> : null}
            </button>
          </div>
        );
      })}
    </div>
  );
};
