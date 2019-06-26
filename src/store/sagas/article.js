import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import API from '~/api'
import {
  ARTICLE_PAGE_LOAD,
  CREATE_COMMENT,
} from '../modules/article'

function* fetch(action) {
  try {
    const { slug, config } = action.payload
    const res = yield all([
      call(API.Articles.get, { slug, requestId: ARTICLE_PAGE_LOAD.request, config }),
      call(API.Comments.get, { slug, requestId: ARTICLE_PAGE_LOAD.request, config }),
    ])

    yield put({
      type: ARTICLE_PAGE_LOAD.success,
      payload: res,
    })
  } catch(error) {
    yield put({
      type: ARTICLE_PAGE_LOAD.failure,
      error,
    })
  }
}

function* watchFetch() {
  yield takeEvery(ARTICLE_PAGE_LOAD.request, fetch);
}

function* createComment(action) {
  const { slug, comment, onSuccess, onFailure } = action.payload

  try {
    const res = yield call(API.Comments.create, { slug, comment })

    if(onSuccess) {
      onSuccess(res)
    }

    yield put({
      type: CREATE_COMMENT.success,
      payload: res,
    })
  } catch(error) {
    if(onFailure) {
      onFailure(error)
    }
  }
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