import { LoadingStatus } from '../../../utils/constants';

export interface IBidsState {
  loadingStatus: LoadingStatus;
  userBids: BidsType[];
  sentBids: BidsType[];
}

export enum BidsActions {
  BIDS_FETCHING = 'BIDS_FETCHING',
  BIDS_FETCHED = 'BIDS_FETCHED',
  BIDS_FETCHED_PRO = 'BIDS_FETCHED_PRO',
  BIDS_FETCHING_ERROR = 'BIDS_FETCHING_ERROR',
}

export type IBidsAction = IBidsFetching | IBidsFetched | IBidsFetchingError | IBidsFetchedPro;

export interface IBidsFetching {
  type: BidsActions.BIDS_FETCHING;
}

export interface IBidsFetched {
  type: BidsActions.BIDS_FETCHED;
  payload: BidsType[];
}

export interface IBidsFetchedPro {
  type: BidsActions.BIDS_FETCHED_PRO;
  payload: BidsType[];
}

export interface IBidsFetchingError {
  type: BidsActions.BIDS_FETCHING_ERROR;
}

export interface BidsType {
  date_time: number;
  date_time_add: number;
  description: string;
  from_id: string;
  from_name: string;
  id_: string;
  status: string;
  to_id: string;
  to_name: string;
}
