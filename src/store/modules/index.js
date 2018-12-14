import { combineReducers } from 'redux'
import auth from './auth'
import article from './article'
import articleList from './articleList'
import profile from './profile'
import tags from './tags'

export default combineReducers({
  auth,
  article,
  articleList,
  profile,
  tags
})