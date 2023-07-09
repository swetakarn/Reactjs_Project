import { call, put, takeEvery } from 'redux-saga/effects';
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
function getApiData() {
 return fetch(apiUrl).then(response => response.json().catch(error => error));
}

function* fetchUsers(action) {
 try {
  const users = yield call(getApiData);
  yield put({ type: 'GET_USERS_SUCCESS', users: users });
 } catch (error) {
  yield put({ type: 'GET_USERS_FAILED', message: error.message });
 }
}

function* userSaga() {
 yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;