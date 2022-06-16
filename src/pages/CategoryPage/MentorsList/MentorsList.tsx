import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../store';
import { getFullName } from '../../../utils/format';
import { MentorItem } from './MentorItem';
import styles from './mentorslist.scss';

export function MentorsList() {
  const cvs = useSelector((state: IState) => state.category.cvs);

  const mentorList = useMemo(
    () =>
      cvs.map((item) => {
        const name = getFullName(item.user.first_name, item.user.last_name);
        const info = [
          {
            title: 'Experience',
            desc: item.experience,
          },
          {
            title: 'Price per 1 hour',
            desc: item.price,
          },
          {
            title: 'Received help',
            desc: String(item.help_count),
          },
        ];

        return <MentorItem id={item.id_} name={name} info={info} key={item.id_} job={item.job} />;
      }),
    [cvs],
  );

  return (
    <div className={styles.mentors}>
      <ul>{mentorList}</ul>
    </div>
  );
}
