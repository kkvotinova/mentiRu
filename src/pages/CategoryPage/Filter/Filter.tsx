import React, { useState, useEffect } from 'react';
import styles from './filter.scss';
import checkbox from '../../../resources/svg/checkbox.svg';
import checkboxMarked from '../../../resources/svg/checkbox-marked.svg';

const FILTER_LIST: string[] = [
  'Backend Developer', 'Frontend Developer', 'Android Developer',
  'IOS Developer', 'UI/UX/Design', 'Illustrator'
]

interface IFilterItem {
  name: string;
  isMarked: boolean;
}

export function Filter() {
  const [list, setList] = useState(FILTER_LIST.map(item => ({name: item, isMarked: false})));

  const onChangeList = ({name, isMarked}: IFilterItem) => {
    const index = list.findIndex(item => item.name === name);
    setList(list =>
      list.slice(0, index).concat({
        name: list[index].name,
        isMarked,
      }, list.slice(index + 1, list.length))
    );
  }

  const clearAll = () => {
    setList(FILTER_LIST.map(item => ({
      name: item,
      isMarked: false
    })));
  }

  return (
    <div className={styles.filter}>
      <div className={styles.header}>
        <h3>Filter</h3>
        <button onClick={clearAll} className={styles.text}>Clear all</button>
      </div>
      <ul>
        {list.map((item, id) => <FilterItem key={id} item={item} onChangeList={onChangeList}/>)}
      </ul>
    </div>
  );
}

interface IContentProps {
  item: IFilterItem
  onChangeList: any;
}

const FilterItem = ({item, onChangeList}: IContentProps) => {
  const {name, isMarked} = item;
  return (
    <li
      onClick={() => onChangeList({name, isMarked: !isMarked})}
      style={{backgroundImage: 'url(' + `${isMarked ? checkboxMarked : checkbox}` + ')'}}
      className={styles.item} >
      {name}</li>
  );
}
