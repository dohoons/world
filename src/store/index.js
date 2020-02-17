import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ArgumentError, promiseMiddleware } from '@adobe/redux-saga-promise'
import modules from './modules'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware({
  onError: (error) => {
    if (error instanceof ArgumentError) {
      console.log('Oops, programmer error! I called redux-saga-promise incorrectly:', error)
    } else {
      // ...
    }
  }
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  modules,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware,
      sagaMiddleware,
    )
  )
)

sagaMiddleware.run(rootSaga)

export default store