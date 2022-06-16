import { LoadingStatus } from '../../../utils/constants';

export interface IMentorState {
  loadingStatus: LoadingStatus | 'cool';
  cv: ICV | undefined;
  user: ICVUser | undefined;
}

export enum MentorActions {
  MENTOR_FETCHING = 'MENTOR_FETCHING',
  MENTOR_FETCHED = 'MENTOR_FETCHED',
  OTHER_DATA_FETCHED = 'OTHER_DATA_FETCHED',
  MENTOR_FETCHING_ERROR = 'MENTOR_FETCHING_ERROR',
}

export type IMentorAction =
  | IMentorFetching
  | IMentorFetched
  | IMentorFetchingError
  | OtherDataFetching;

export interface IMentorFetching {
  type: MentorActions.MENTOR_FETCHING;
}

export interface OtherDataFetching {
  type: MentorActions.OTHER_DATA_FETCHED;
}

export interface IMentorFetched {
  type: MentorActions.MENTOR_FETCHED;
  payload: { cv: ICV | undefined; user: ICVUser | undefined };
}

export interface IMentorFetchingError {
  type: MentorActions.MENTOR_FETCHING_ERROR;
}

export interface ICVSkills {
  category?: string;
  grade: string;
  name: string;
}

export interface ICVUser {
  about_me: string;
  date_time_add: 1655056227;
  email: string;
  first_name: string;
  gender: string;
  id_: string;
  is_admin: boolean;
  last_name: string;
  middle_name: string;
  password: string;
  phone: string;
  telegram_profile: string;
}

export interface ICV {
  about: string;
  category: string;
  cv_skills: ICVSkills[];
  cv_times: [];
  date_time_add: string;
  experience: string;
  help_count: number;
  id_: string;
  is_hidden: boolean;
  job: string;
  price: string;
  user: ICVUser;
  user_id: string;
}

// ===
export interface MentorSendRequestData {
  to_id: string;
  description: string;
  date_time: number;
}
