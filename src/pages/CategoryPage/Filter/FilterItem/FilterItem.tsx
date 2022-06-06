import React from 'react';
import styles from './filteritem.scss';
import checkbox from '../../../../resources/svg/checkbox.svg';
import checkboxMarked from '../../../../resources/svg/checkbox-marked.svg';

export interface IFilterItem {
  name: string;
  isMarked: boolean;
}

interface IContentProps {
  item: IFilterItem;
  onChangeList: any;
}

export function FilterItem({ item, onChangeList }: IContentProps) {
  const { name, isMarked } = item;
  return (
    <li
      onClick={() => onChangeList({ name, isMarked: !isMarked })}
      style={{ backgroundImage: 'url(' + `${isMarked ? checkboxMarked : checkbox}` + ')' }}
      className={styles.item}
    >
      {name}
    </li>
  );
}
