import { all, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import API from '~/api'
import {
  LOGIN,
  LOGIN_INIT,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UPDATE,
  UPDATE_PENDING,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
} from '../modules/auth'

function* loginReq(type, action) {
  try {
    yield put({
      type: LOGIN_PENDING,
    })

    if(type === 'login') {
      const { email, password, onSuccess } = action.payload
      const res = yield API.Auth.login({ email, password })

      if(onSuccess) {
        onSuccess(res)
      }

      yield put({
        type: LOGIN_SUCCESS,
        payload: res,
      })
    } else {
      const res = yield API.Auth.current()

      yield put({
        type: LOGIN_SUCCESS,
        payload: res,
      })
    }
  } catch(error) {
    yield put({
      type: LOGIN_FAILURE,
      error,
    })
  }
}

function* login(action) {
  yield loginReq('login', action)
}

function* watchLogin() {
  yield takeLatest(LOGIN, login);
}

function* loginInit() {
  yield loginReq('loginInit')
}

function* watchLoginInit() {
  yield takeEvery(LOGIN_INIT, loginInit);
}

function* register(action) {
  try {
    yield put({
      type: REGISTER_PENDING,
    })

    const { username, email, password } = action.payload
    const res = yield API.Auth.register({ username, email, password })

    yield put({
      type: REGISTER_SUCCESS,
      payload: res,
    })
  } catch(error) {
    yield put({
      type: REGISTER_FAILURE,
      error,
    })
  }
}

function* watchRegister() {
  yield takeLatest(REGISTER, register);
}

function* update(action) {  
  try {
    yield put({
      type: UPDATE_PENDING,
    })
    
    const { user, onSuccess } = action.payload
    const res = yield API.Auth.save({ user })

    if(onSuccess) {
      onSuccess(res)
    }

    yield put({
      type: UPDATE_SUCCESS,
      payload: res,
    })

  } catch(error) {
    yield put({
      type: UPDATE_FAILURE,
      error,
    })
  }
}

function* watchUpdate() {
  yield takeLatest(UPDATE, update);
}

export default function* authSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLoginInit),
    fork(watchRegister),
    fork(watchUpdate),
  ]);
}