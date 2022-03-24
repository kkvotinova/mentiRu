import React, { useState } from 'react';
import styles from './resumeitem.scss';

interface IContentProps {
  id: number;
  name: string;
  desc: string;
  deleteResume: (id: number) => void;
}

export function ResumeItem({name, desc, id, deleteResume}: IContentProps) {
  const [isFull, setIsFull] = useState(false);

  return (
    <li className={styles.item}>
      <h3 className={styles.heading}>{name}</h3>
      <div className={styles.desc}>
        {isFull ? desc : desc.substring(0, 130) + ' ...'}
        <span onClick={() => setIsFull(isFull => !isFull)}>
          {isFull ? ' Hide' : ' See more'}
        </span>
      </div>
      <div className={styles.action}>
        <button onClick={() => deleteResume(id)} className={styles.accept}>Accept</button>
        <button onClick={() => deleteResume(id)} className={styles.decline}>Decline</button>
      </div>
    </li>
  );
}
