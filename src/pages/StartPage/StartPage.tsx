import React, { ReactElement } from 'react';
import { Category } from './Category';
import { Search } from './Search';
import styles from './startpage.scss';
import {
  BackendIcon, FrontendIcon, AndroidIcon, DevopsIcon, DesignIcon, IosIcon
} from '../../components/icons';

interface ICategory {
  svgIcon: ReactElement;
  name: string;
  link: string;
}

const CATEGORY_LIST: Array<ICategory> = [
  {
    svgIcon: <BackendIcon />,
    name: 'Backend',
    link: '/category/backend'
  },
  {
    svgIcon: <FrontendIcon />,
    name: 'Frontend',
    link: '/category/frontend'
  },
  {
    svgIcon: <AndroidIcon />,
    name: 'Android',
    link: '/category/android'
  },
  {
    svgIcon: <DevopsIcon />,
    name: 'DevOps',
    link: '/category/devOps'
  },
  {
    svgIcon: <DesignIcon />,
    name: 'UI/UX',
    link: '/category/ui-ux'
  },
  {
    svgIcon: <IosIcon />,
    name: 'IOS',
    link: '/category/ios'
  }
];

export function StartPage() {
  return (
    <main className={styles.main}>
      <Search />
      <section className={styles.section_desc}>
        <h2 className={styles.heading_desc}>Find your mentor</h2>
        <p className={styles.description}>A proper conversation will clarify the situation better than ten hours of searching the Internet. Therefore, we help those who need advice to find a person with expertise and discuss their issue one-on-one.</p>
      </section>
      <section className={styles.section_cat}>
        <h1 className={styles.heading_cat}>Find a mentor by category</h1>
        <ul className={styles.categories}>
          {CATEGORY_LIST.map((item, id) => <Category key={id} {...item}/>)}
        </ul>
      </section>
    </main>
  );
}
