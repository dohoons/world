import { all, fork, put, takeLatest } from 'redux-saga/effects'
import API from '~/api'
import {
  TAGS_LOAD,
  TAGS_LOAD_PENDING,
  TAGS_LOAD_SUCCESS,
  TAGS_LOAD_FAILURE,
} from '../modules/tags'

function* fetch() {
  try {
    yield put({
      type: TAGS_LOAD_PENDING,
    })

    const res = yield API.Tags.getAll()

    yield put({
      type: TAGS_LOAD_SUCCESS,
      payload: res,
    })
  } catch(error) {
    yield put({
      type: TAGS_LOAD_FAILURE,
      error,
    })
  }
}

function* watchFetch() {
  yield takeLatest(TAGS_LOAD, fetch);
}

export default function* tagsSaga() {
  yield all([
    fork(watchFetch),
  ]);
}