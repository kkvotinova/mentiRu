import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { IState } from '../../store';
import { getCategory } from '../../store/actions/category';
import { CategoryFetchData } from '../../store/reducers/category/type';
import styles from './categorypage.scss';
import { Filter } from './Filter';
import { MentorsList } from './MentorsList';
import { Search } from './Search';

export function CategoryPage() {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const [value, setValue] = useState('');

  const data: CategoryFetchData = useMemo(() => {
    const categories = [params.id as string];
    return {
      filter: {
        categories: categories[0] === 'search' ? [] : categories,
      },
      search_text: searchParams.get('text') || '',
    };
  }, [params.id, searchParams]);

  const dispatch = useDispatch();
  const loadingStatus = useSelector((state: IState) => state.category.loadingStatus);
  const cvs = useSelector((state: IState) => state.category.cvs);

  useEffect(() => {
    dispatch(getCategory(data));
  }, [dispatch, data]);

  return (
    <main className={styles.main}>
      <Search value={value} setValue={setValue} />
      <section className={styles.section}>
        {loadingStatus === 'error' ? (
          <div className={styles.errorMessage}>Oops, something went wrong</div>
        ) : cvs.length ? (
          <>
            <MentorsList />
            <Filter selectedItemName={params.id as string} />
          </>
        ) : (
          <div className={styles.errorMessage}>Nothing found for your search</div>
        )}
      </section>
    </main>
  );
}
