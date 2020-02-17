import { all, call, fork, takeEvery } from 'redux-saga/effects'
import { implementPromiseAction } from '@adobe/redux-saga-promise'
import API from '~/api'
import {
  TAGS_LOAD,
} from '../modules/tags'

function* fetch(action) {
  yield call(implementPromiseAction, action, function* () {
    return yield call(API.Tags.getAll)
  })
}

function* watchFetch() {
  yield takeEvery(TAGS_LOAD.request, fetch);
}

export default function* tagsSaga() {
  yield all([
    fork(watchFetch),
  ]);
}