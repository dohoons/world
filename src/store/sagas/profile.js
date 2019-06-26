import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import API from '~/api'
import {
  PROFILE_LOAD,
  PROFILE_FOLLOW,
  PROFILE_UNFOLLOW,
} from '../modules/profile'

function* fetch(action) {
  try {
    const { username } = action.payload
    const res = yield call(API.Profile.get, { username, requestId: PROFILE_LOAD })

    yield put({
      type: PROFILE_LOAD.success,
      payload: res,
    })
  } catch(error) {
    yield put({
      type: PROFILE_LOAD.failure,
      error,
    })
  }
}

function* watchFetch() {
  yield takeEvery(PROFILE_LOAD.request, fetch);
}

function* follow(action) {
  try {
    const { username } = action.payload
    const res = yield call(API.Profile.follow, { username })

    yield put({
      type: PROFILE_FOLLOW.success,
      payload: res,
    })
  } catch(error) {
    console.log(error)
  }
}

function* watchFollow() {
  yield takeLatest(PROFILE_FOLLOW.request, follow);
}

function* unfollow(action) {
  try {
    const { username } = action.payload
    const res = yield call(API.Profile.unfollow, { username })

    yield put({
      type: PROFILE_UNFOLLOW.success,
      payload: res,
    })
  } catch(error) {
    console.log(error)
  }
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