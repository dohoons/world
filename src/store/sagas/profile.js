import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import API from '~/api'
import {
  PROFILE_LOAD,
  PROFILE_LOAD_PENDING,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAILURE,
  PROFILE_FOLLOW,
  PROFILE_FOLLOW_SUCCESS,
  PROFILE_UNFOLLOW,
  PROFILE_UNFOLLOW_SUCCESS,
} from '../modules/profile'

function* fetch(action) {
  try {
    yield put({
      type: PROFILE_LOAD_PENDING,
    })

    const { username } = action.payload
    const res = yield call(API.Profile.get, { username, requestId: PROFILE_LOAD })

    yield put({
      type: PROFILE_LOAD_SUCCESS,
      payload: res,
    })
  } catch(error) {
    yield put({
      type: PROFILE_LOAD_FAILURE,
      error,
    })
  }
}

function* watchFetch() {
  yield takeEvery(PROFILE_LOAD, fetch);
}

function* follow(action) {
  try {
    const { username } = action.payload
    const res = yield call(API.Profile.follow, { username })

    yield put({
      type: PROFILE_FOLLOW_SUCCESS,
      payload: res,
    })
  } catch(error) {
    console.log(error)
  }
}

function* watchFollow() {
  yield takeLatest(PROFILE_FOLLOW, follow);
}

function* unfollow(action) {
  try {
    const { username } = action.payload
    const res = yield call(API.Profile.unfollow, { username })

    yield put({
      type: PROFILE_UNFOLLOW_SUCCESS,
      payload: res,
    })
  } catch(error) {
    console.log(error)
  }
}

function* watchUnfollow() {
  yield takeLatest(PROFILE_UNFOLLOW, unfollow);
}

export default function* profileSaga() {
  yield all([
    fork(watchFetch),
    fork(watchFollow),
    fork(watchUnfollow),
  ]);
}