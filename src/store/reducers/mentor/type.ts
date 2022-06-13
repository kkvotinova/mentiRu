export interface MentorState {
  loadingStatus: 'loading' | 'idle' | 'error';
}

export interface ICVSkills {
  category: string;
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
  categories: string;
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
