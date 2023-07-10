import { expectSaga } from 'redux-saga-test-plan';
import { getApiData } from '../Redux/Saga/userSaga';
import { fetchUsers, userSaga } from '../Redux/Saga/userSaga';
import { getUsersSuccess, getUsersFailed } from '../Redux/Action/user';

jest.mock('../Redux/Saga/userSaga', () => ({
  getApiData: jest.fn(),
}));

describe('User Saga', () => {
  test('fetchUsers should dispatch GET_USERS_SUCCESS on successful API response', () => {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
    getApiData.mockReturnValueOnce(users);

    return expectSaga(fetchUsers)
      .put(getUsersSuccess(users))
      .run();
  });

  test('fetchUsers should dispatch GET_USERS_FAILED on API error', () => {
    const error = new Error('API Error');
    getApiData.mockRejectedValueOnce(error);

    return expectSaga(fetchUsers)
      .put(getUsersFailed(error.message))
      .run();
  });
});