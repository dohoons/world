import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '~/store/modules/auth'
import goLogin from '~/util/goLogin'

export default (WrappedComponent = null) => {
  const NeedAuth = (props) => {
    useEffect(() => {
      if(!props.user) {
        goLogin(props)
      }
    }, [props, props.user])
    
    return <WrappedComponent { ...props } />
  }

  const mapStateToProps = (state) => ({
    user: state.auth.user,
    userInfo: state.auth.userInfo,
  })

  const mapDispatchToProps = (dispatch) => ({
    authActions: bindActionCreators(authActions, dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(NeedAuth)
}