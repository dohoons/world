import produce from "immer"
import API from '~/api'

const ARTICLE_LIST_LOAD = 'ARTICLE_LIST_LOAD'
const ARTICLE_LIST_LOAD_PENDING = 'ARTICLE_LIST_LOAD_PENDING'
const ARTICLE_LIST_LOAD_SUCCESS = 'ARTICLE_LIST_LOAD_SUCCESS'
const ARTICLE_LIST_LOAD_FAILURE = 'ARTICLE_LIST_LOAD_FAILURE'
const ARTICLE_LIST_UNLOAD = 'ARTICLE_LIST_UNLOAD'

const apiName = {
  undefined: 'all',
  all: 'all',
  feed: 'feed',
  articles: 'byAuthor',
  favorites: 'favoritedBy',
  tag: 'byTag',
}

export const fetch = ({ filter, param, config }) => ({
  type: ARTICLE_LIST_LOAD,
  payload: API.Articles[apiName[filter]]({ 
    ...param,
    requestId: 'ARTICLE_LIST_LOAD',
    config,
  }),
})

export const reset = () => ({
  type: ARTICLE_LIST_UNLOAD
})

const initialState = {
  loading: false,
  articles: [],
  articlesCount: 0
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ARTICLE_LIST_LOAD_PENDING:
        draft.loading = true
        return

      case ARTICLE_LIST_LOAD_SUCCESS:
        const { articles, articlesCount } = action.payload.data
        draft.loading = false
        draft.articles = articles
        draft.articlesCount = articlesCount
        return

      case ARTICLE_LIST_LOAD_FAILURE:
        draft.loading = false
        draft.articles = []
        draft.articlesCount = 0
        return

      case ARTICLE_LIST_UNLOAD:
        API.axios.cancel('ARTICLE_LIST_LOAD')
        draft.loading = false
        draft.articles = []
        draft.articlesCount = 0
        return

      default:
        return state
    }
  })
}