import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import modules from './modules'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  modules,
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
    )
  )
)

sagaMiddleware.run(rootSaga)

export default store