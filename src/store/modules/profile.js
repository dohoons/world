import produce from "immer"
import API from 'api'

const PROFILE_LOAD = 'PROFILE_LOAD'
const PROFILE_LOAD_PENDING = 'PROFILE_LOAD_PENDING'
const PROFILE_LOAD_SUCCESS = 'PROFILE_LOAD_SUCCESS'
const PROFILE_LOAD_FAILURE = 'PROFILE_LOAD_FAILURE'
const PROFILE_UNLOAD = 'PROFILE_UNLOAD'
const PROFILE_FOLLOW = 'PROFILE_FOLLOW'
const PROFILE_FOLLOW_SUCCESS = 'PROFILE_FOLLOW_SUCCESS'
const PROFILE_UNFOLLOW = 'PROFILE_UNFOLLOW'
const PROFILE_UNFOLLOW_SUCCESS = 'PROFILE_UNFOLLOW_SUCCESS'

export const fetch = (username) => ({
  type: PROFILE_LOAD,
  payload: API.Profile.get({ username })
})

export const reset = () => ({
  type: PROFILE_UNLOAD
})

export const follow = (username) => ({
  type: PROFILE_FOLLOW,
  payload: API.Profile.follow({ username })
})

export const unfollow = (username) => ({
  type: PROFILE_UNFOLLOW,
  payload: API.Profile.unfollow({ username })
})

const initialState = {
  loading: false,
  profile: {},
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case PROFILE_LOAD_PENDING:
        draft.loading = true
        return

      case PROFILE_LOAD_SUCCESS:
        draft.loading = false
        draft.profile = action.payload.data.profile
        return

      case PROFILE_LOAD_FAILURE:
        draft.loading = false
        draft.profile = {}
        return

      case PROFILE_UNLOAD:
        draft.loading = false
        draft.profile = {}
        return

      case PROFILE_FOLLOW_SUCCESS:
        draft.profile = action.payload.data.profile
        return

      case PROFILE_UNFOLLOW_SUCCESS:
        draft.profile = action.payload.data.profile
        return

      default:
        return state
    }
  })
}