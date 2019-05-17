import { all, fork } from 'redux-saga/effects'

import article from './article'
import articleList from './articleList'
import auth from './auth'
import profile from './profile'
import tags from './tags'

export default function* rootSaga() {
  yield all([
    fork(article),
    fork(articleList),
    fork(auth),
    fork(profile),
    fork(tags),
  ])
}