import "core-js/stable"
import "regenerator-runtime/runtime"
import React from 'react'
import { render } from 'react-dom'
import ReactGA from 'react-ga'
import { AppContainer } from 'react-hot-loader'
import { Router } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import locale from './locale'

import store from '~/store'
import App from '~/App'
import ErrorMonitoring from '~/util/ErrorMonitoring'
import ScrollManager from '~/util/ScrollManager'

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem('lang') || (navigator.language.includes('ko') ? 'ko' : 'en'),
  resources: {
    en: locale.en,
    ko: locale.ko,
  },
})

export const history = createBrowserHistory({ basename: process.env.PUBLIC_URL })

const alertOptions = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

ReactGA.initialize('UA-143179392-1')
ReactGA.pageview(window.location.pathname + window.location.search)

history.listen((location) => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname + location.search)
})

const renderApp = Component => {
  render(
    <ErrorMonitoring>
      <AppContainer>
        <Provider store={store}>
          <Router history={history}>
            <ScrollManager>
              <LastLocationProvider>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                  <I18nextProvider i18n={i18next}>
                    <Component />
                  </I18nextProvider>
                </AlertProvider>
              </LastLocationProvider>
            </ScrollManager>
          </Router>
        </Provider>
      </AppContainer>
    </ErrorMonitoring>,
    document.getElementById('root'),
  )
}

renderApp(App)

if(module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    renderApp(NextApp)
  })
}