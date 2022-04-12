import { AnyAction } from 'redux';
import { UPDATE_NAME, CLEAR_USER_DETAILS } from './actionTypes';

export type UserDetailsState = {
  name: string;
};

const initialState: UserDetailsState = {
  name: '',
};

const reducer = (state: UserDetailsState = initialState, action: AnyAction): UserDetailsState => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, ...action.payload };
    case CLEAR_USER_DETAILS:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
