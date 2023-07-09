import { getUser } from '../Redux/Action/user';
import * as types from '../Redux/Type/type';

describe('User Actions', () => {
  test('getUser should create an action to request user data', () => {
    const expectedAction = {
      type: types.GET_USERS_REQUESTED,
      payload: undefined,
    };

    expect(getUser()).toEqual(expectedAction);
  });
});