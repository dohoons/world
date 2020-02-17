import produce from "immer"
import { createPromiseAction } from '@adobe/redux-saga-promise'
import API from '~/api'
import createReqTypes from "~/util/createReqTypes"

export const ARTICLE_LIST_LOAD = createReqTypes('ARTICLE_LIST_LOAD')
export const ARTICLE_LIST_UNLOAD = 'ARTICLE_LIST_UNLOAD'

export const fetch = createPromiseAction(ARTICLE_LIST_LOAD.type, ({ filter, param, config }) => ({ filter, param, config }))
export const reset = () => ({ type: ARTICLE_LIST_UNLOAD })

const initialState = {
  loading: false,
  articles: [],
  articlesCount: 0
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ARTICLE_LIST_LOAD.request:
        draft.loading = true
        return

      case ARTICLE_LIST_LOAD.success:
        const { articles, articlesCount } = action.payload.data
        draft.loading = false
        draft.articles = articles
        draft.articlesCount = articlesCount
        return

      case ARTICLE_LIST_LOAD.failure:
        draft.loading = false
        draft.articles = []
        draft.articlesCount = 0
        return

      case ARTICLE_LIST_UNLOAD:
        API.axios.cancel(ARTICLE_LIST_LOAD.request)
        draft.loading = false
        draft.articles = []
        draft.articlesCount = 0
        return

      default:
        return state
    }
  })
}