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
    let categories = [params.id as string];
    const search_text = searchParams.get('text') || '';

    const queryFilter = searchParams.get('filter');
    if (queryFilter) {
      categories = queryFilter.toLowerCase().split('_');
    }

    return {
      filter: {
        categories: queryFilter || params.id !== 'search' ? categories : [],
      },
      search_text,
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
