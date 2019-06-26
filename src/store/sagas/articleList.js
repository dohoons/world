import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import API from '~/api'
import {
  ARTICLE_LIST_LOAD,
  ARTICLE_LIST_LOAD_PENDING,
  ARTICLE_LIST_LOAD_SUCCESS,
  ARTICLE_LIST_LOAD_FAILURE,
} from '../modules/articleList'

const apiName = {
  undefined: 'all',
  all: 'all',
  feed: 'feed',
  articles: 'byAuthor',
  favorites: 'favoritedBy',
  tag: 'byTag',
}

function* fetch(action) {
  try {
    yield put({
      type: ARTICLE_LIST_LOAD_PENDING,
    })

    const { filter, param, config } = action.payload
    const res = yield call(API.Articles[apiName[filter]], { 
      ...param,
      requestId: ARTICLE_LIST_LOAD,
      config,
    })

    yield put({
      type: ARTICLE_LIST_LOAD_SUCCESS,
      payload: res,
    })
  } catch(error) {
    yield put({
      type: ARTICLE_LIST_LOAD_FAILURE,
      error,
    })
  }
}

function* watchFetch() {
  yield takeEvery(ARTICLE_LIST_LOAD, fetch);
}

export default function* articleListSaga() {
  yield all([
    fork(watchFetch),
  ]);
}