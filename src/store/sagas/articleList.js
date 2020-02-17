import { all, call, fork, takeEvery } from 'redux-saga/effects'
import { implementPromiseAction } from '@adobe/redux-saga-promise'
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
  yield call(implementPromiseAction, action, function* () {
    const { filter, param, config } = action.payload
    return yield call(API.Articles[apiName[filter]], { 
      ...param,
      requestId: ARTICLE_LIST_LOAD.request,
      config,
    })
  })
}

function* watchFetch() {
  yield takeEvery(ARTICLE_LIST_LOAD.request, fetch);
}

export default function* articleListSaga() {
  yield all([
    fork(watchFetch),
  ]);
}