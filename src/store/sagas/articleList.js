import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import API from '~/api'
import {
  ARTICLE_LIST_LOAD,
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
    const { filter, param, config } = action.payload
    const res = yield call(API.Articles[apiName[filter]], { 
      ...param,
      requestId: ARTICLE_LIST_LOAD.request,
      config,
    })

    yield put({
      type: ARTICLE_LIST_LOAD.success,
      payload: res,
    })
  } catch(error) {
    yield put({
      type: ARTICLE_LIST_LOAD.failure,
      error,
    })
  }
}

function* watchFetch() {
  yield takeEvery(ARTICLE_LIST_LOAD.request, fetch);
}

export default function* articleListSaga() {
  yield all([
    fork(watchFetch),
  ]);
}