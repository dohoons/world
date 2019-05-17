import produce from "immer"
import API from '~/api'

export const ARTICLE_LIST_LOAD = 'ARTICLE_LIST_LOAD'
export const ARTICLE_LIST_LOAD_PENDING = 'ARTICLE_LIST_LOAD_PENDING'
export const ARTICLE_LIST_LOAD_SUCCESS = 'ARTICLE_LIST_LOAD_SUCCESS'
export const ARTICLE_LIST_LOAD_FAILURE = 'ARTICLE_LIST_LOAD_FAILURE'
export const ARTICLE_LIST_UNLOAD = 'ARTICLE_LIST_UNLOAD'

export const fetch = ({ filter, param, config }) => ({
  type: ARTICLE_LIST_LOAD,
  payload: { filter, param, config }
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