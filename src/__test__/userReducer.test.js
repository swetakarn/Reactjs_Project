import usersReducer from '../Redux/Reducer/users';
import * as types from '../Redux/Type/type';

describe('Users Reducer', () => {
  test('should handle GET_USERS_REQUESTED action', () => {
    const initialState = {
      users: [],
      loading: false,
      error: null,
    };
    const action = {
      type: types.GET_USERS_REQUESTED,
    };
    const expectedState = {
      ...initialState,
      loading: true,
    };

    expect(usersReducer(initialState, action)).toEqual(expectedState);
  });
});