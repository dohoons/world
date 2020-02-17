import produce from "immer"
import { createPromiseAction } from '@adobe/redux-saga-promise'
import { markdown } from 'markdown'
import API from '~/api'
import createReqTypes from "~/util/createReqTypes"

export const ARTICLE_PAGE_LOAD = createReqTypes('ARTICLE_PAGE_LOAD')
export const ARTICLE_PAGE_UNLOAD = 'ARTICLE_PAGE_UNLOAD'
export const CREATE_COMMENT = createReqTypes('CREATE_COMMENT')
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const fetch = createPromiseAction(ARTICLE_PAGE_LOAD.type, (slug, config) => ({ slug, config }))
export const reset = () => ({ type: ARTICLE_PAGE_UNLOAD })
export const createComment = createPromiseAction(CREATE_COMMENT.type, ({ slug, comment }) => ({ slug, comment }))
export const deleteComment = (commentId) => ({ type: DELETE_COMMENT, commentId })

const initialState = {
  article: null,
  comments: [],
  error: null,
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ARTICLE_PAGE_LOAD.success:
        draft.article = {
          ...action.payload[0].data.article,
          body: action.payload[0].data.article.body,
          bodyHTML: markdown.toHTML(action.payload[0].data.article.body),
        }
        draft.comments = action.payload[1].data.comments
        draft.loading = false
        return

      case ARTICLE_PAGE_LOAD.failure:
        draft.article = null
        draft.comments = []
        draft.error = action.payload.response.data
        return

      case ARTICLE_PAGE_UNLOAD:
        API.axios.cancel(ARTICLE_PAGE_LOAD.request)
        draft.article = null
        draft.comments = []
        draft.error = null
        return

      case CREATE_COMMENT.success:
        draft.comments = [action.payload.data.comment, ...state.comments]
        return

      case DELETE_COMMENT:
        draft.comments = state.comments.filter(comment => comment.id !== action.commentId)
        return

      default:
        return state
    }
  })
}