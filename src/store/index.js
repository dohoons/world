import { createStore, compose, applyMiddleware } from 'redux'
import modules from './modules'

import ReduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

const customizedPromiseMiddleware = promiseMiddleware({
    promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  modules,
  composeEnhancers(
    applyMiddleware(
      ReduxThunk,
      customizedPromiseMiddleware,
    )
  )
)

export default store