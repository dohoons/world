import produce from "immer"
import API from '~/api'
import Cookies from 'js-cookie'
import createReqTypes from "~/util/createReqTypes"

export const LOGIN = createReqTypes('LOGIN')
export const LOGIN_INIT = 'LOGIN_INIT'
export const LOGOUT = 'LOGOUT'
export const REGISTER = createReqTypes('REGISTER')
export const UPDATE = createReqTypes('UPDATE')
export const RESET_AUTH = 'RESET_AUTH'

export const init = (token) => {
  API.setToken(token)
  return ({
    type: LOGIN_INIT,
  })
}

export const login = payload => ({
  type: LOGIN.request,
  payload,
})

export const logout = () => ({
  type: LOGOUT
})

export const register = payload => ({
  type: REGISTER.request,
  payload,
})

export const update = payload => ({
  type: UPDATE.request,
  payload,
})

export const resetAuth = () => ({
  type: RESET_AUTH
})

const initialState = {
  user: Cookies.get('jwt') || null,
  userInfo: {},
  loading: false,
  error: [],
}

const mapError = (errors) => {
  return errors ? Object.keys(errors).map(k => `${k} ${errors[k].join(', ')}`) : []
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOGIN.request:
      case REGISTER.request:
      case UPDATE.request:
        draft.loading = true
        return
      
      case LOGIN.success:
      case REGISTER.success:
        const { token } = action.payload.data.user
        API.setToken(token)
        draft.user = token
        draft.userInfo = action.payload.data.user
        draft.loading = false
        draft.error = []
        return

      case UPDATE.success:
        draft.userInfo = action.payload.data.user
        draft.loading = false
        draft.error = []
        return

      case UPDATE.failure:
        draft.loading = false
        draft.error = mapError(action.error.response.data.errors)
        
        return

      case LOGIN.failure:
      case REGISTER.failure:
        draft.user = null
        draft.loading = false
        draft.error = mapError(action.error.response.data.errors)
        API.setToken(null)
        
        return

      case LOGOUT:
        draft.user = null
        draft.userInfo = {}
        API.setToken(null)
        return

      case RESET_AUTH:
        draft.loading = false
        draft.error = []
        return

      default:
        return state
    }
  })
}