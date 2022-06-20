import { useCallback, useEffect, useMemo, useState } from 'react';
import { FilterItem, IFilterItem } from './FilterItem';
import styles from './filter.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../store';
import { withCapitalLetter } from '../../../utils/format';
import { getCategories } from '../../../store/actions/categories';

export interface FilterProps {
  selectedItemName: string;
}

export function Filter({ selectedItemName }: FilterProps) {
  const dispatch = useDispatch();

  const categories = useSelector((state: IState) => state.categories.categoriesList);
  const [list, setList] = useState(
    categories.map((item) => ({
      name: withCapitalLetter(item),
      isMarked: item === selectedItemName,
    })),
  );

  const onChangeList = useCallback(
    ({ name, isMarked }: IFilterItem) => {
      const index = list.findIndex((item) => item.name === name);
      setList((list) =>
        list.slice(0, index).concat(
          {
            name: list[index].name,
            isMarked,
          },
          list.slice(index + 1, list.length),
        ),
      );
    },
    [list],
  );

  const handleClearAll = useCallback(() => {
    setList(
      categories.map((item) => ({
        name: withCapitalLetter(item),
        isMarked: false,
      })),
    );
  }, [categories]);

  const itemList = useMemo(
    () => list.map((item, id) => <FilterItem key={id} item={item} onChangeList={onChangeList} />),
    [list, onChangeList],
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (!list.length) {
      setList(
        categories.map((item) => ({
          name: withCapitalLetter(item),
          isMarked: item === selectedItemName,
        })),
      );
    }
  }, [categories, list.length, selectedItemName]);

  return (
    <div className={styles.filter}>
      <div className={styles.header}>
        <h3>Filter</h3>
        <button onClick={handleClearAll} className={styles.text}>
          Clear all
        </button>
      </div>
      <ul>{itemList}</ul>
    </div>
  );
}
