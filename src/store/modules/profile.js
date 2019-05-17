import produce from "immer"
import API from '~/api'

export const PROFILE_LOAD = 'PROFILE_LOAD'
export const PROFILE_LOAD_PENDING = 'PROFILE_LOAD_PENDING'
export const PROFILE_LOAD_SUCCESS = 'PROFILE_LOAD_SUCCESS'
export const PROFILE_LOAD_FAILURE = 'PROFILE_LOAD_FAILURE'
export const PROFILE_UNLOAD = 'PROFILE_UNLOAD'
export const PROFILE_FOLLOW = 'PROFILE_FOLLOW'
export const PROFILE_FOLLOW_SUCCESS = 'PROFILE_FOLLOW_SUCCESS'
export const PROFILE_UNFOLLOW = 'PROFILE_UNFOLLOW'
export const PROFILE_UNFOLLOW_SUCCESS = 'PROFILE_UNFOLLOW_SUCCESS'

export const fetch = username => ({
  type: PROFILE_LOAD,
  payload: { username },
})

export const reset = () => ({
  type: PROFILE_UNLOAD
})

export const follow = (username) => ({
  type: PROFILE_FOLLOW,
  payload: { username }
})

export const unfollow = (username) => ({
  type: PROFILE_UNFOLLOW,
  payload: { username }
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
        API.axios.cancel('PROFILE_LOAD')
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