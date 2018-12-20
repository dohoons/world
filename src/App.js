import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"
import API from 'api'
import Cookies from 'js-cookie'
import * as authActions from 'store/modules/auth'
import needAuth from 'util/needAuth'

import "react-placeholder/lib/reactPlaceholder.css"
import './style.scss'

import Header from 'components/Header'
import Footer from 'components/Footer'

import {
  Home,
  Login,
  Logout,
  Join,
  Form,
  Article,
  Profile,
  ProfileEdit,
} from 'pages'

class App extends Component {
  constructor(props) {
    super(props)

    const token = Cookies.get('jwt')

    if(token) {
      API.setToken(token)
      props.authActions.init()
    }
  }

  render() {
    const { lng } = this.props
    
    return (
      <>
        <Helmet>
          <html lang={lng} />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
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
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('common'),
)(App)