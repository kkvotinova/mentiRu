import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './search.scss';

export interface SearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function Search({ value, setValue }: SearchProps) {
  const navigate = useNavigate();

  const handleSearch = useCallback(() => {
    navigate(`/category/search?text=${value}`);
  }, [navigate, value]);

  const handleInputSearch = useCallback(
    (e) => {
      if (e.key !== 'Enter') return;
      handleSearch();
    },
    [handleSearch],
  );

  return (
    <section className={styles.section}>
      <h1 className={styles.header}>Find your mentor</h1>
      <div className={styles.group}>
        <input
          onKeyDown={handleInputSearch}
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          placeholder='Mentor search'
        />
        <button className={styles.primary} onClick={handleSearch}>
          Search
        </button>
      </div>
    </section>
  );
}
