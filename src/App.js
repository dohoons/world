import React, { useState, useEffect } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { useSelector, useActions } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"
import Cookies from 'js-cookie'
import * as authActions from '~/store/modules/auth'
import needAuth from '~/util/needAuth'

import "react-placeholder/lib/reactPlaceholder.css"
import './style.scss'

import Header from '~/components/Header'
import Footer from '~/components/Footer'

import {
  Home,
  Login,
  Join,
  Form,
  Article,
  Profile,
  ProfileEdit,
} from '~/pages'

const App = ({ lng, t }) => {
  const [ token, setToken ] = useState(Cookies.get('jwt'))

  const { user } = useSelector(state => state.auth, [])
  const actions = useActions(authActions, [])

  useEffect(() => {
    if(token) {
      actions.init(token)
    }
  }, [actions, token])

  if(token && !user) {
    setToken(undefined)
    return null
  }

  return (
    <>
      <Helmet
        htmlAttributes={{ lang : lng }}
        defaultTitle={`${t('common:siteName')}`}
        titleTemplate={`%s - ${t('common:siteName')}`}
      />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} />
        <Route path="/article/:slug" component={Article} />
        <Route exact path="/form" component={needAuth(Form)} />
        <Route path="/form/:slug" component={needAuth(Form)} />
        <Route path="/@:username/:filter?/:page?" component={Profile} />
        <Route path="/profile" component={needAuth(ProfileEdit)} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </>
  )
}

export default compose(
  withRouter,
  withNamespaces('common'),
)(App)