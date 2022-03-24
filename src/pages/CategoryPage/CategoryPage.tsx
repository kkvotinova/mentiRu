import React from 'react';
import styles from './categorypage.scss';
import { Filter } from './Filter';
import { MentorsList } from './MentorsList';
import { Search } from './Search';

export function CategoryPage() {
  return (
    <main className={styles.main}>
      <Search />
      <section className={styles.section}>
        <MentorsList />
        <Filter />
      </section>
    </main>
  );
}

