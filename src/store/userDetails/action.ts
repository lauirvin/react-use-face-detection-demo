import { Dispatch } from 'redux';
import { UPDATE_NAME, CLEAR_USER_DETAILS } from './actionTypes';
import { UserDetailsState } from './reducer';

const getActionType = (key: keyof UserDetailsState): string => {
  switch (key) {
    case 'name':
      return UPDATE_NAME;
    default:
      return '';
  }
};

export type UpdateUserDetailsDispatchType = Dispatch<{
  type: string;
  payload: UserDetailsState;
}>;

export const updateUserDetails =
  (key: keyof UserDetailsState, value: string) =>
  (dispatch: Dispatch): ReturnType<UpdateUserDetailsDispatchType> =>
    dispatch({
      type: getActionType(key),
      payload: { [key]: value },
    });

export const clearUserDetails =
  () =>
  (dispatch: Dispatch): Omit<UpdateUserDetailsDispatchType, 'payload'> =>
    dispatch({
      type: CLEAR_USER_DETAILS,
    });
