import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './categorypage.scss';
import { Filter } from './Filter';
import { MentorsList } from './MentorsList';
import { Search } from './Search';

export function CategoryPage() {
  return (
    <>
      <Header isGroup={true} isAuto={true}/>
      <main className={styles.main}>
        <Search />
        <section className={styles.section}>
          <MentorsList />
          <Filter />
        </section>
      </main>
      <Footer />
    </>
  );
}

