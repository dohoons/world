import produce from "immer"
import API from '~/api'

const TAGS_LOAD = 'TAGS_LOAD'
const TAGS_LOAD_PENDING = 'TAGS_LOAD_PENDING'
const TAGS_LOAD_SUCCESS = 'TAGS_LOAD_SUCCESS'
const TAGS_LOAD_FAILURE = 'TAGS_LOAD_FAILURE'
const TAGS_UNLOAD = 'TAGS_UNLOAD'

export const fetch = () => ({
  type: TAGS_LOAD,
  payload: API.Tags.getAll()
})

export const reset = () => ({
  type: TAGS_UNLOAD
})

const initialState = {
  loading: false,
  tags: [],
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case TAGS_LOAD_PENDING:
        draft.loading = true
        return

      case TAGS_LOAD_SUCCESS:
        draft.loading = false
        draft.tags = action.payload.data.tags
        return

      case TAGS_LOAD_FAILURE:
        draft.loading = false
        draft.tags = {}
        return

      case TAGS_UNLOAD:
        draft.loading = false
        draft.tags = {}
        return

      default:
        return state
    }
  })
}