import React, { useState } from 'react';
import styles from './mentorpage.scss';
import { Profile } from './Profile';
import { Competencies } from './Competencies';
import { Modal } from './Modal';

interface IMentorInfo {
  name: string;
  job: string;
  about: string;
  info: IItemInfo[];
  competence: ICompetencies[];
}

interface IItemInfo {
  title: 'Experience' | 'Price (per hour)' | 'Received help';
  desc: string;
}

interface ICompetencies {
  skill: number;
  name: string;
}

const MENTOR_INFO: IMentorInfo = {
  name: 'Nikita Sobolev',
  job: 'CTO @ wemake.services',
  about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio labore libero, fugiat corrupti aliquam neque, reprehenderit reiciendis animi ullam consequuntur possimus, incidunt repudiandae optio? Maxime labore nulla odio at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio labore libero, fugiat corrupti aliquam neque, reprehenderit reiciendis animi ullam consequuntur possimus, incidunt repudiandae optio? Maxime labore nulla odio at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio labore libero, fugiat corrupti aliquam neque, reprehenderit reiciendis animi ullam consequuntur possimus, incidunt repudiandae optio? Maxime labore nulla odio at.',
  info: [
    {
      title: 'Experience',
      desc: '10+ years'
    },
    {
      title: 'Price (per hour)',
      desc: '65 $'
    },
    {
      title: 'Received help',
      desc: '8 people'
    }
  ],
  competence: [
    {
      skill: 9,
      name: 'Python'
    },
    {
      skill: 7,
      name: 'Django'
    },
    {
      skill: 6,
      name: 'TypeScript'
    },
    {
      skill: 5,
      name: 'GitHub Actions'
    },
  ]
};

export function MentorPage() {
  const [modal, setModal] = useState(false);

  const onChange = (item: boolean) => {
    setModal(item);
  }

  return (
    <>
      <main className={styles.main}>
        <Profile onChange={onChange} {...MENTOR_INFO}/>
        <section className={styles.section}>
          <h2>About me</h2>
          <p>{MENTOR_INFO.about}</p>
        </section>
        <Competencies {...MENTOR_INFO.competence}/>
      </main>
      {modal ? <Modal onChange={onChange}/> : null}
    </>
  );
}
