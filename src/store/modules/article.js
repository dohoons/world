import produce from "immer"
import API from 'api'
import { markdown } from 'markdown'

const ARTICLE_PAGE_LOAD = 'ARTICLE_PAGE_LOAD'
const ARTICLE_PAGE_LOAD_SUCCESS = 'ARTICLE_PAGE_LOAD_SUCCESS'
const ARTICLE_PAGE_UNLOAD = 'ARTICLE_PAGE_UNLOAD'
const CREATE_COMMENT = 'CREATE_COMMENT'
const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS'
const DELETE_COMMENT = 'DELETE_COMMENT'

export const fetch = (slug) => ({
  type: ARTICLE_PAGE_LOAD,
  payload: Promise.all([
    API.Articles.get({ slug }),
    API.Comments.get({ slug }),
  ])
})

export const reset = () => ({
  type: ARTICLE_PAGE_UNLOAD
})

export const createComment = ({ slug, comment }) => ({
  type: CREATE_COMMENT,
  payload: API.Comments.create({ slug, comment })
})

export const deleteComment = (commentId) => ({
  type: DELETE_COMMENT,
  commentId
})

const initialState = {
  article: null,
  comments: [],
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ARTICLE_PAGE_LOAD_SUCCESS:
        draft.article = {
          ...action.payload[0].data.article,
          body: markdown.toHTML(action.payload[0].data.article.body)
        }
        draft.comments = action.payload[1].data.comments
        draft.loading = false
        return

      case ARTICLE_PAGE_UNLOAD:
        draft.article = null
        draft.comments = []
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