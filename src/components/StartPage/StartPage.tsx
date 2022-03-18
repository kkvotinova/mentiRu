import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Category } from './Category';
import { Search } from './Search';
import styles from './startpage.scss';

interface ICategory {
  svg: any;
  name: string;
  link: string;
}

const CATEGORY_LIST: Array<ICategory> = [
  {
    name: 'Backend',
    link: '#',
    svg: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 26.666C10 17.462 17.462 10 26.666 10H73.332C82.538 10 90 17.462 90 26.666V73.332C90 82.538 82.538 90 73.334 90H26.666C17.462 90 10 82.538 10 73.334V26.666Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10"/>
            <path d="M44.502 60L24.06 49.242L26.496 42L51.332 55.072V64.928L26.496 78L24.06 70.758L44.502 60Z" fill="#597EF7"/>
        </svg>
  },
  {
    name: 'Frontend',
    link: '#',
    svg: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90.03 88H9.97C7.778 88 6 86.222 6 84.03V15.97C6 13.778 7.778 12 9.97 12H90.03C92.222 12 94 13.778 94 15.97V84.03C94 86.222 92.222 88 90.03 88Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10"/>
          <path d="M14 16C13.4696 16 12.9609 16.2107 12.5858 16.5858C12.2107 16.9609 12 17.4696 12 18C12 18.5304 12.2107 19.0391 12.5858 19.4142C12.9609 19.7893 13.4696 20 14 20C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18C16 17.4696 15.7893 16.9609 15.4142 16.5858C15.0391 16.2107 14.5304 16 14 16ZM20 16C19.4696 16 18.9609 16.2107 18.5858 16.5858C18.2107 16.9609 18 17.4696 18 18C18 18.5304 18.2107 19.0391 18.5858 19.4142C18.9609 19.7893 19.4696 20 20 20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18C22 17.4696 21.7893 16.9609 21.4142 16.5858C21.0391 16.2107 20.5304 16 20 16Z" fill="#597EF7"/>
          <path d="M12 80H30M6 24H94H6ZM6 56H94H6ZM50 88V56V88ZM12 64H44H12ZM12 72H44H12Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10"/>
        </svg>
  },
  {
    name: 'Android',
    link: '#',
    svg: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M76 28C74.318 16.718 63.334 8 50 8C36.666 8 25.682 16.718 24 28H76Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M61.438 10.312L67.046 2" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M64 18.996C64 17.34 62.66 16 60.994 16C59.34 16 58 17.34 58 18.996C58 20.66 59.34 22 60.994 22C62.66 22 64 20.66 64 18.996Z" fill="#597EF7"/>
          <path d="M38.562 10.312L32.954 2" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M39.006 22C40.66 22 42 20.66 42 18.996C42 17.34 40.66 16 39.006 16C37.34 16 36 17.34 36 18.996C36 20.66 37.34 22 39.006 22Z" fill="#597EF7"/>
          <path d="M56 78C56 79.098 56 90.902 56 92C56 95.314 58.686 98 62 98C65.314 98 68 95.314 68 92C68 90.902 68 79.098 68 78M24 28V74C24 76.208 25.792 78 28 78C28.482 78 71.518 78 72 78C74.208 78 76 76.208 76 74V28H24ZM82 32C78.686 32 76 34.686 76 38C76 38.862 76 61.138 76 62C76 65.314 78.686 68 82 68C85.314 68 88 65.314 88 62C88 61.138 88 38.862 88 38C88 34.686 85.314 32 82 32ZM18 32C14.686 32 12 34.686 12 38C12 38.862 12 61.138 12 62C12 65.314 14.686 68 18 68C21.314 68 24 65.314 24 62C24 61.138 24 38.862 24 38C24 34.686 21.314 32 18 32ZM32 78C32 79.098 32 90.902 32 92C32 95.314 34.686 98 38 98C41.314 98 44 95.314 44 92C44 90.902 44 79.098 44 78H32Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
  },
  {
    name: 'DevOps',
    link: '#',
    svg: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M65.014 50C72.384 50 75.702 47.204 76.754 46.572C75.37 44.764 74.666 42.574 74.454 40.232C73.798 32.984 77.89 29.6 77.89 29.6C77.89 29.6 83.846 32.982 85.272 40.504C93.152 38.342 98 42.34 98 42.34C98 42.34 95.534 50.998 83.036 50.524C74.544 71.674 56.368 82 34 82C9.92 82 2 64.47 2 53.518C2 51.536 2.276 50 2.276 50C2.276 50 57.052 50 65.014 50Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 62C32.256 62 32.5 62.048 32.724 62.136C32.48 62.276 32.316 62.54 32.316 62.842C32.316 63.292 32.682 63.658 33.132 63.658C33.44 63.658 33.71 63.486 33.848 63.234C33.946 63.47 34 63.728 34 64C34 65.104 33.104 66 32 66C30.896 66 30 65.104 30 64C30 62.896 30.896 62 32 62ZM0 58H99.714C97.542 57.45 92.844 56.706 93.62 53.86C89.672 58.428 80.152 57.064 77.748 54.812C75.072 58.692 59.496 57.218 58.41 54.194C55.056 58.13 44.662 58.13 41.306 54.194C40.22 57.218 24.642 58.692 21.966 54.812C19.564 57.064 10.044 58.428 6.096 53.86C6.87 56.706 2.172 57.45 0 58Z" fill="#597EF7"/>
          <path d="M52 40H62V50H52V40ZM42 40H52V50H42V40ZM32 40H42V50H32V40ZM22 40H32V50H22V40ZM12 40H22V50H12V40ZM42 20H52V30H42V20ZM42 30H52V40H42V30ZM32 30H42V40H32V30ZM22 30H32V40H22V30Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10"/>
          <path d="M26.384 67.532C26.384 67.532 17.202 70.74 6.59601 68.9" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
  },
  {
    name: 'UI/UX',
    link: '#',
    svg: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52 36H37C28.716 36 22 29.284 22 21C22 12.716 28.716 6 37 6H52V36Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M52 66H37C28.716 66 22 59.284 22 51C22 42.716 28.716 36 37 36H52V66Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M37 96C28.716 96 22 89.284 22 81C22 72.716 28.716 66 37 66H52V81C52 89.284 45.284 96 37 96Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M67 36H52V6H67C75.284 6 82 12.716 82 21C82 29.284 75.284 36 67 36Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M68 66C75.732 66 82 59.732 82 52C82 44.268 75.732 38 68 38C60.268 38 54 44.268 54 52C54 59.732 60.268 66 68 66Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
  },
  {
    name: 'IOS',
    link: '#',
    svg: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M89.058 69.5C86.896 74.286 85.862 76.428 83.086 80.658C79.206 86.566 73.73 93.938 66.958 93.988C60.934 94.038 59.38 90.058 51.206 90.124C43.032 90.164 41.328 94.062 35.298 94C28.526 93.938 23.342 87.296 19.458 81.4C8.6 64.858 7.454 45.472 14.164 35.158C18.912 27.844 26.424 23.548 33.478 23.548C40.662 23.548 45.178 27.496 51.118 27.496C56.882 27.496 60.392 23.538 68.7 23.538C74.984 23.538 81.628 26.962 86.376 32.87C70.844 41.38 73.368 63.564 89.058 69.5ZM62.394 16.936C65.416 13.056 67.708 7.582 66.878 2C61.946 2.336 56.18 5.486 52.81 9.564C49.758 13.278 47.228 18.794 48.214 24.13C53.594 24.304 59.162 21.096 62.394 16.936Z" stroke="#597EF7" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
  }
];

export function StartPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Search />
        <section className={styles.section_desc}>
          <h2 className={styles.heading_desc}>Find your mentor</h2>
          <p className={styles.description}>A proper conversation will clarify the situation better than ten hours of searching the Internet. Therefore, we help those who need advice to find a person with expertise and discuss their issue one-on-one.</p>
        </section>
        <section className={styles.section_cat}>
          <h1 className={styles.heading_cat}>Find a mentor by category</h1>
          <ul className={styles.categories}>
            {CATEGORY_LIST.map((item, id) => <Category svg={item.svg} key={id} link={item.link} name={item.name}/>)}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
