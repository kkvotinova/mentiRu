import React, { useContext, useState } from 'react';
import styles from './mentorpage.scss';
import { Profile } from './Profile';
import { Competencies } from './Competencies';
import { Modal } from '../../components/Modal';
import { ModalContent } from './ModalContent';
import { AuthContext } from '../../context';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

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
  const [showModal, setShowModal] = useState(false);
  const {isLoading} = useContext(AuthContext);

  return (
    <>
      <main className={styles.main}>
        <Profile setShowModal={setShowModal} {...MENTOR_INFO}/>
        <section className={styles.section}>
          <h2>About me</h2>
          {isLoading ? <Skeleton count={10}/> : <p>{MENTOR_INFO.about}</p>}
        </section>
        <Competencies {...MENTOR_INFO.competence}/>
      </main>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        children={<ModalContent/>}
        heading={'New request'}/>
    </>
  );
}
