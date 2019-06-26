import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import API from '~/api'
import {
  LOGIN,
  LOGIN_INIT,
  REGISTER,
  UPDATE,
} from '../modules/auth'

function* loginReq(type, action) {
  try {
    if(type === 'login') {
      const { email, password, onSuccess } = action.payload
      const res = yield call(API.Auth.login, { email, password })

      if(onSuccess) {
        onSuccess(res)
      }

      yield put({
        type: LOGIN.success,
        payload: res,
      })
    } else {
      const res = yield call(API.Auth.current)

      yield put({
        type: LOGIN.success,
        payload: res,
      })
    }
  } catch(error) {
    yield put({
      type: LOGIN.failure,
      error,
    })
  }
}

function* login(action) {
  yield call(loginReq, 'login', action)
}

function* watchLogin() {
  yield takeLatest(LOGIN.request, login);
}

function* loginInit() {
  yield call(loginReq ,'loginInit')
}

function* watchLoginInit() {
  yield takeEvery(LOGIN_INIT, loginInit);
}

function* register(action) {
  try {
    const { username, email, password } = action.payload
    const res = yield call(API.Auth.register, { username, email, password })

    yield put({
      type: REGISTER.success,
      payload: res,
    })
  } catch(error) {
    yield put({
      type: REGISTER.failure,
      error,
    })
  }
}

function* watchRegister() {
  yield takeLatest(REGISTER.request, register);
}

function* update(action) {  
  try {
    const { user, onSuccess } = action.payload
    const res = yield call(API.Auth.save, { user })

    if(onSuccess) {
      onSuccess(res)
    }

    yield put({
      type: UPDATE.success,
      payload: res,
    })

  } catch(error) {
    yield put({
      type: UPDATE.failure,
      error,
    })
  }
}

function* watchUpdate() {
  yield takeLatest(UPDATE.request, update);
}

export default function* authSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLoginInit),
    fork(watchRegister),
    fork(watchUpdate),
  ]);
}