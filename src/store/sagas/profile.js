import { all, call, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import { implementPromiseAction } from '@adobe/redux-saga-promise'
import API from '~/api'
import {
  PROFILE_LOAD,
  PROFILE_FOLLOW,
  PROFILE_UNFOLLOW,
} from '../modules/profile'

function* fetch(action) {
  yield call(implementPromiseAction, action, function* () {
    const { username } = action.payload
    return yield call(API.Profile.get, { username, requestId: PROFILE_LOAD.request })
  })
}

function* watchFetch() {
  yield takeEvery(PROFILE_LOAD.request, fetch);
}

function* follow(action) {
  yield call(implementPromiseAction, action, function* () {
    const { username } = action.payload
    return yield call(API.Profile.follow, { username })
  })
}

function* watchFollow() {
  yield takeLatest(PROFILE_FOLLOW.request, follow);
}

function* unfollow(action) {
  yield call(implementPromiseAction, action, function* () {
    const { username } = action.payload
    return yield call(API.Profile.unfollow, { username })
  })
}

function* watchUnfollow() {
  yield takeLatest(PROFILE_UNFOLLOW.request, unfollow);
}

export default function* profileSaga() {
  yield all([
    fork(watchFetch),
    fork(watchFollow),
    fork(watchUnfollow),
  ]);
}