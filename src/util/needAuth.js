import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '~/store/modules/auth'
import goLogin from '~/util/goLogin'

export default (WrappedComponent = null) => {
  class needAuth extends Component {
    constructor(props) {
      super(props)

      if(!props.user) {
        goLogin(props)
      }
    }
    render() {
      return <WrappedComponent { ...this.props } />
    }
  }

  const mapStateToProps = (state) => ({
    user: state.auth.user,
    userInfo: state.auth.userInfo,
  })

  const mapDispatchToProps = (dispatch) => ({
    authActions: bindActionCreators(authActions, dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(needAuth)
}