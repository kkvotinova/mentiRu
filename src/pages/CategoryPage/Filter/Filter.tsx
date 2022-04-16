import React, { useState } from 'react';
import { FilterItem, IFilterItem } from './FilterItem';
import styles from './filter.scss';

const FILTER_LIST: string[] = [
  'Backend Developer', 'Frontend Developer', 'Android Developer',
  'IOS Developer', 'UI/UX/Design', 'Illustrator'
]

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
