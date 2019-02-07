import React from 'react'
import { withRouter } from 'react-router-dom'
import { withLastLocation } from 'react-router-last-location'

export default (WrappedComponent = null) => {
  const withPushBack = (props) => {
    const pushBack = () => {
      const { lastLocation, history } = props

      if(lastLocation) {
        history.push(lastLocation.pathname)
      } else {
        history.goBack()
      }

      return lastLocation
    }

    return (
      <WrappedComponent { ...props } pushBack={pushBack} />
    )
  }

  return withLastLocation(withRouter(withPushBack))
}