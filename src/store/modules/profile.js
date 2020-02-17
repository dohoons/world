import produce from "immer"
import { createPromiseAction } from '@adobe/redux-saga-promise'
import API from '~/api'
import createReqTypes from "~/util/createReqTypes"

export const PROFILE_LOAD = createReqTypes('PROFILE_LOAD')
export const PROFILE_UNLOAD = 'PROFILE_UNLOAD'
export const PROFILE_FOLLOW = createReqTypes('PROFILE_FOLLOW')
export const PROFILE_UNFOLLOW = createReqTypes('PROFILE_UNFOLLOW')

export const fetch = createPromiseAction(PROFILE_LOAD.type, (username) => ({ username }))
export const reset = () => ({ type: PROFILE_UNLOAD })
export const follow = createPromiseAction(PROFILE_FOLLOW.type, (username) => ({ username }))
export const unfollow = createPromiseAction(PROFILE_UNFOLLOW.type, (username) => ({ username }))

const initialState = {
  loading: false,
  profile: {},
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case PROFILE_LOAD.request:
        draft.loading = true
        return

      case PROFILE_LOAD.success:
        draft.loading = false
        draft.profile = action.payload.data.profile
        return

      case PROFILE_LOAD.failure:
        draft.loading = false
        draft.profile = {}
        return

      case PROFILE_UNLOAD:
        API.axios.cancel(PROFILE_LOAD.request)
        draft.loading = false
        draft.profile = {}
        return

      case PROFILE_FOLLOW.success:
        draft.profile = action.payload.data.profile
        return

      case PROFILE_UNFOLLOW.success:
        draft.profile = action.payload.data.profile
        return

      default:
        return state
    }
  })
}