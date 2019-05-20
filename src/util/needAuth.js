import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default (WrappedComponent = null) => {
  const NeedAuth = (props) => {
    const { user } = useSelector(state => state.auth)

    if(!user) {
      return <Redirect to={{
        pathname: '/login',
        state: {
          prevLocation: props.location.pathname,
          loginMsg: true
        }
      }} />
    } else {
      return <WrappedComponent { ...props } />
    }
  }

  return NeedAuth
}