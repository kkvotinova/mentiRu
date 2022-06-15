import { Reducer } from 'redux';
import { IMentorAction, IMentorState, MentorActions } from './type';

const initialState: IMentorState = {
  loadingStatus: 'loading',
  cv: undefined,
  user: undefined,
};

export const mentorReducer: Reducer = (
  state = initialState,
  action: IMentorAction,
): IMentorState => {
  switch (action.type) {
    case MentorActions.MENTOR_FETCHING:
      return {
        ...state,
        loadingStatus: 'loading',
      };
    case MentorActions.MENTOR_FETCHED:
      return {
        loadingStatus: 'idle',
        cv: action.payload.cv,
        user: action.payload.user,
      };
    case MentorActions.MENTOR_FETCHING_ERROR:
      return {
        ...state,
        loadingStatus: 'error',
      };
    case MentorActions.OTHER_DATA_FETCHED:
      return {
        ...state,
        loadingStatus: 'idle',
      };
    default:
      return state;
  }
};
