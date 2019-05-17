import produce from "immer"
import API from '~/api'
import Cookies from 'js-cookie'

export const LOGIN = 'LOGIN'
export const LOGIN_INIT = 'LOGIN_INIT'
export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'
export const REGISTER = 'REGISTER'
export const REGISTER_PENDING = 'REGISTER_PENDING'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const UPDATE = 'UPDATE'
export const UPDATE_PENDING = 'UPDATE_PENDING'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const UPDATE_FAILURE = 'UPDATE_FAILURE'
export const RESET_AUTH = 'RESET_AUTH'

export const init = (token) => {
  API.setToken(token)
  return ({
    type: LOGIN_INIT,
  })
}

export const login = payload => ({
  type: LOGIN,
  payload,
})

export const logout = () => ({
  type: LOGOUT
})

export const register = payload => ({
  type: REGISTER,
  payload,
})

export const update = payload => ({
  type: UPDATE,
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
      case LOGIN_PENDING:
      case REGISTER_PENDING:
      case UPDATE_PENDING:
        draft.loading = true
        return
      
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        const { token } = action.payload.data.user
        API.setToken(token)
        draft.user = token
        draft.userInfo = action.payload.data.user
        draft.loading = false
        draft.error = []
        return

      case UPDATE_SUCCESS:
        draft.userInfo = action.payload.data.user
        draft.loading = false
        draft.error = []
        return

      case UPDATE_FAILURE:
        draft.loading = false
        draft.error = mapError(action.error.response.data.errors)
        
        return

      case LOGIN_FAILURE:
      case REGISTER_FAILURE:
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