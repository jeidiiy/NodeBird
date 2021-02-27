import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    });
  }
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
