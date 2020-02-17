import produce from "immer"
import { createPromiseAction } from '@adobe/redux-saga-promise'
import createReqTypes from "~/util/createReqTypes"

export const TAGS_LOAD = createReqTypes('TAGS_LOAD')
export const TAGS_UNLOAD = 'TAGS_UNLOAD'

export const fetch = createPromiseAction(TAGS_LOAD.type)
export const reset = () => ({ type: TAGS_UNLOAD })

const initialState = {
  loading: false,
  tags: [],
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case TAGS_LOAD.request:
        draft.loading = true
        return

      case TAGS_LOAD.success:
        draft.loading = false
        draft.tags = action.payload.data.tags
        return

      case TAGS_LOAD.failure:
        draft.loading = false
        draft.tags = []
        return

      case TAGS_UNLOAD:
        draft.loading = false
        draft.tags = []
        return

      default:
        return state
    }
  })
}