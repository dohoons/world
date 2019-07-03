import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
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

const App = () => {
  const { t, i18n } = useTranslation('common')
  const [ token, setToken ] = useState(Cookies.get('jwt'))

  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if(token) {
      dispatch(authActions.init(token))
    }
  }, [dispatch, token])

  if(token && !user) {
    setToken(undefined)
    return null
  }

  return (
    <>
      <Helmet
        htmlAttributes={{ lang : i18n.language }}
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

export default hot(App)