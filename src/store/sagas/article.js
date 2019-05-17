import { all, fork, put, takeLatest } from 'redux-saga/effects'
import API from '~/api'
import {
  ARTICLE_PAGE_LOAD,
  ARTICLE_PAGE_LOAD_PENDING,
  ARTICLE_PAGE_LOAD_SUCCESS,
  ARTICLE_PAGE_LOAD_FAILURE,
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
} from '../modules/article'

function* fetch(action) {
  try {
    yield put({
      type: ARTICLE_PAGE_LOAD_PENDING,
    })

    const { slug, config } = action.payload
    const res = yield Promise.all([
      API.Articles.get({ slug, requestId: 'ARTICLE_PAGE_LOAD_LOAD', config }),
      API.Comments.get({ slug, requestId: 'ARTICLE_PAGE_LOAD_LOAD', config }),
    ])

    yield put({
      type: ARTICLE_PAGE_LOAD_SUCCESS,
      payload: res,
    })
  } catch(error) {
    yield put({
      type: ARTICLE_PAGE_LOAD_FAILURE,
      error,
    })
  }
}

function* watchFetch() {
  yield takeLatest(ARTICLE_PAGE_LOAD, fetch);
}

function* createComment(action) {
  const { slug, comment, onSuccess, onFailure } = action.payload

  try {
    const res = yield API.Comments.create({ slug, comment })

    if(onSuccess) {
      onSuccess(res)
    }

    yield put({
      type: CREATE_COMMENT_SUCCESS,
      payload: res,
    })
  } catch(error) {
    if(onFailure) {
      onFailure(error)
    }
  }
}

function* watchCreateComment() {
  yield takeLatest(CREATE_COMMENT, createComment);
}

export default function* articleSaga() {
  yield all([
    fork(watchFetch),
    fork(watchCreateComment),
  ]);
}