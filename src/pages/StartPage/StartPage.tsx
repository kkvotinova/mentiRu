import React, { ReactElement, useCallback, useEffect, useMemo } from 'react';
import { Category } from './Category';
import { Search } from './Search';
import { initialCategories } from '../../store/reducers/categories/type';
import styles from './startpage.scss';
import {
  BackendIcon,
  FrontendIcon,
  AndroidIcon,
  DevopsIcon,
  DesignIcon,
  IosIcon,
} from '../../components/icons';
import { IState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/actions/categories';

interface ICategory {
  svgIcon: ReactElement;
  name: initialCategories | string;
}

export function StartPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state: IState) => state.categories.categoriesList);
  const loadingStatus = useSelector((state: IState) => state.categories.loadingStatus);

  const getCategoryIcon = useCallback((name: initialCategories | string): ReactElement => {
    switch (name) {
      case 'backend':
        return <BackendIcon />;
      case 'frontend':
        return <FrontendIcon />;
      case 'android':
        return <AndroidIcon />;
      case 'devops':
        return <DevopsIcon />;
      case 'design':
        return <DesignIcon />;
      case 'ios':
        return <IosIcon />;
      default:
        return <>Error</>;
    }
  }, []);

  const categoriesList: ICategory[] = useMemo(
    () =>
      categories.map((item) => ({
        svgIcon: getCategoryIcon(item),
        name: item,
      })),
    [categories, getCategoryIcon],
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const config = useMemo(
    () => categoriesList.map((item, id) => <Category key={id} {...item} />),
    [categoriesList],
  );

  return (
    <main className={styles.main}>
      <Search />
      <section className={styles.section_desc}>
        <h2 className={styles.heading_desc}>Find your mentor</h2>
        <p className={styles.description}>
          A proper conversation will clarify the situation better than ten hours of searching the
          Internet. Therefore, we help those who need advice to find a person with expertise and
          discuss their issue one-on-one.
        </p>
      </section>
      <section className={styles.section_cat}>
        <h1 className={styles.heading_cat}>Find a mentor by category</h1>
        <ul className={styles.categories}>
          {loadingStatus !== 'error' ? config : 'Oops, something went wrong'}
        </ul>
      </section>
    </main>
  );
}
