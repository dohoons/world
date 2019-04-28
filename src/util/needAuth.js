import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import goLogin from '~/util/goLogin'

export default (WrappedComponent = null) => {
  const NeedAuth = (props) => {
    const { user } = useSelector(state => state.auth, [])

    useEffect(() => {
      if(!user) {
        goLogin(props)
      }
    }, [props, user])
    
    return <WrappedComponent { ...props } />
  }

  return NeedAuth
}