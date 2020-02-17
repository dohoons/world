import { all, call, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import { implementPromiseAction } from '@adobe/redux-saga-promise'
import API from '~/api'
import {
  ARTICLE_PAGE_LOAD,
  CREATE_COMMENT,
} from '../modules/article'

function* fetch(action) {
  yield call(implementPromiseAction, action, function* () {
    const { slug, config } = action.payload
    return yield all([
      call(API.Articles.get, { slug: slug, requestId: ARTICLE_PAGE_LOAD.request, config }),
      call(API.Comments.get, { slug, requestId: ARTICLE_PAGE_LOAD.request, config }),
    ])
  })
}

function* watchFetch() {
  yield takeEvery(ARTICLE_PAGE_LOAD.request, fetch);
}

function* createComment(action) {
  yield call(implementPromiseAction, action, function* () {
    const { slug, comment } = action.payload
    return yield call(API.Comments.create, { slug, comment })
  })
}

function* watchCreateComment() {
  yield takeLatest(CREATE_COMMENT.request, createComment);
}

export default function* articleSaga() {
  yield all([
    fork(watchFetch),
    fork(watchCreateComment),
  ]);
}