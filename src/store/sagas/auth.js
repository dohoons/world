import { all, call, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import { implementPromiseAction } from '@adobe/redux-saga-promise'
import API from '~/api'
import {
  LOGIN,
  LOGIN_INIT,
  REGISTER,
  UPDATE,
} from '../modules/auth'

function* login(action) {
  yield call(implementPromiseAction, action, function* () {
    const { email, password } = action.payload
    return yield call(API.Auth.login, { email, password })
  })
}

function* watchLogin() {
  yield takeLatest(LOGIN.request, login);
}

function* loginInit(action) {
  yield call(implementPromiseAction, action, function* () {
    API.setToken(action.payload.token)
    return yield call(API.Auth.current)
  })
}

function* watchLoginInit() {
  yield takeEvery(LOGIN_INIT.request, loginInit);
}

function* register(action) {
  yield call(implementPromiseAction, action, function* () {
    const { username, email, password } = action.payload
    return yield call(API.Auth.register, { username, email, password })
  })
}

function* watchRegister() {
  yield takeLatest(REGISTER.request, register);
}

function* update(action) {  
  yield call(implementPromiseAction, action, function* () {
    const { user } = action.payload
    return yield call(API.Auth.save, { user })
  })
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