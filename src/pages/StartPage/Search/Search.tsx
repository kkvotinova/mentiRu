import React, { useCallback, useState } from 'react';
import styles from './search.scss';
import logo from '../../../resources/start.png';
import { useNavigate } from 'react-router-dom';

export function Search() {
  const navigate = useNavigate();

  const [block, setBlock] = useState(true);
  const [value, setValue] = useState('');

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
      {block ? <div className={styles.block}></div> : null}
      <img onLoad={() => setBlock(false)} className={styles.logo} src={logo} alt='start' />
      <div className={styles.search}>
        <input
          onKeyDown={handleInputSearch}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          className={styles.input}
          placeholder='Mentor search'
        />
        <button className={styles.primary} onClick={handleSearch}>
          Search
        </button>
      </div>
    </section>
  );
}
