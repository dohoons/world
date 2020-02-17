import produce from "immer"
import { createPromiseAction } from '@adobe/redux-saga-promise'
import API from '~/api'
import Cookies from 'js-cookie'
import createReqTypes from "~/util/createReqTypes"

export const LOGIN = createReqTypes('LOGIN')
export const LOGIN_INIT = createReqTypes('LOGIN_INIT')
export const LOGOUT = 'LOGOUT'
export const REGISTER = createReqTypes('REGISTER')
export const UPDATE = createReqTypes('UPDATE')
export const RESET_AUTH = 'RESET_AUTH'

export const init = createPromiseAction(LOGIN_INIT.type, (token) => ({ token }))
export const login = createPromiseAction(LOGIN.type, ({ email, password }) => ({ email, password }))
export const logout = () => ({ type: LOGOUT })
export const register = createPromiseAction(REGISTER.type, ({ username, email, password }) => ({ username, email, password }))
export const update = createPromiseAction(UPDATE.type, ({ user }) => ({ user }))
export const resetAuth = () => ({ type: RESET_AUTH })

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
      case LOGIN_INIT.success:
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
        draft.error = mapError(action.payload.response.data.errors)
        
        return

      case LOGIN.failure:
      case LOGIN_INIT.failure:
      case REGISTER.failure:
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