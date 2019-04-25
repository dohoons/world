import produce from "immer"
import API from '~/api'
import Cookies from 'js-cookie'

const LOGIN = 'LOGIN'
const LOGIN_PENDING = 'LOGIN_PENDING'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGOUT = 'LOGOUT'
const REGISTER = 'REGISTER'
const REGISTER_PENDING = 'REGISTER_PENDING'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const REGISTER_FAILURE = 'REGISTER_FAILURE'
const UPDATE = 'UPDATE'
const UPDATE_PENDING = 'UPDATE_PENDING'
const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
const UPDATE_FAILURE = 'UPDATE_FAILURE'
const RESET_AUTH = 'RESET_AUTH'

export const init = (token) => {
  API.setToken(token)
  return ({
    type: LOGIN,
    payload: API.Auth.current()
  })
}

export const login = ({ email, password }) => ({
  type: LOGIN,
  payload: API.Auth.login({ email, password })
})

export const logout = () => ({
  type: LOGOUT
})

export const register = ({ username, email, password }) => ({
  type: REGISTER,
  payload: API.Auth.register({ username, email, password })
})

export const update = ({ user }) => ({
  type: UPDATE,
  payload: API.Auth.save({ user })
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
        draft.error = mapError(action.payload.response.data.errors)
        
        return

      case LOGIN_FAILURE:
      case REGISTER_FAILURE:
        draft.user = null
        draft.loading = false
        draft.error = mapError(action.payload.response.data.errors)
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