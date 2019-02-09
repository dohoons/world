import React, { useState, useEffect } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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

const App = ({ lng, user, authActions }) => {
  const [ token, setToken ] = useState(Cookies.get('jwt'))

  useEffect(() => {
    if(token) {
      authActions.init(token)
    }
  }, [])

  if(token && !user) {
    setToken(undefined)
    return null
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang : lng }} />
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

const mapStateToProps = (state) => ({
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('common'),
)(App)