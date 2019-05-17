import produce from "immer"
import API from '~/api'
import { markdown } from 'markdown'

export const ARTICLE_PAGE_LOAD = 'ARTICLE_PAGE_LOAD'
export const ARTICLE_PAGE_LOAD_PENDING = 'ARTICLE_PAGE_LOAD_PENDING'
export const ARTICLE_PAGE_LOAD_SUCCESS = 'ARTICLE_PAGE_LOAD_SUCCESS'
export const ARTICLE_PAGE_LOAD_FAILURE = 'ARTICLE_PAGE_LOAD_FAILURE'
export const ARTICLE_PAGE_UNLOAD = 'ARTICLE_PAGE_UNLOAD'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const fetch = (slug, config) => ({
  type: ARTICLE_PAGE_LOAD,
  payload: { slug, config }
})

export const reset = () => ({
  type: ARTICLE_PAGE_UNLOAD
})

export const createComment = payload => ({
  type: CREATE_COMMENT,
  payload: payload
})

export const deleteComment = (commentId) => ({
  type: DELETE_COMMENT,
  commentId
})

const initialState = {
  article: null,
  comments: [],
  error: null,
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ARTICLE_PAGE_LOAD_SUCCESS:
        draft.article = {
          ...action.payload[0].data.article,
          body: action.payload[0].data.article.body,
          bodyHTML: markdown.toHTML(action.payload[0].data.article.body),
        }
        draft.comments = action.payload[1].data.comments
        draft.loading = false
        return

      case ARTICLE_PAGE_LOAD_FAILURE:
        draft.article = null
        draft.comments = []
        draft.error = action.payload.response.data
        return

      case ARTICLE_PAGE_UNLOAD:
        API.axios.cancel('ARTICLE_PAGE_LOAD')
        draft.article = null
        draft.comments = []
        draft.error = null
        return

      case CREATE_COMMENT_SUCCESS:
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