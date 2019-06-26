import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import API from '~/api'
import {
  TAGS_LOAD,
} from '../modules/tags'

function* fetch() {
  try {
    const res = yield call(API.Tags.getAll)

    yield put({
      type: TAGS_LOAD.success,
      payload: res,
    })
  } catch(error) {
    yield put({
      type: TAGS_LOAD.failure,
      error,
    })
  }
}

function* watchFetch() {
  yield takeEvery(TAGS_LOAD.request, fetch);
}

export default function* tagsSaga() {
  yield all([
    fork(watchFetch),
  ]);
}