import { createStore, compose, applyMiddleware } from 'redux'
import modules from './modules'

// import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

// const logger = createLogger()
const customizedPromiseMiddleware = promiseMiddleware({
    promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  modules,
  composeEnhancers(
    applyMiddleware(
      // logger,
      ReduxThunk,
      customizedPromiseMiddleware,
    )
  )
)

export default store