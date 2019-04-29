import React, { Component } from 'react'
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: "https://f1a180714bfb484da363ac5a28a56d63@sentry.io/1375687"
})

class ErrorMonitoring extends Component {
    constructor(props) {
        super(props)
        this.state = { error: null }
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ error })
      Sentry.withScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo[key])
        })
        Sentry.captureException(error)
      })
    }

    render() {
        if (this.state.error) {
            //render fallback UI
            return (
              <button type="button" onClick={() => Sentry.showReportDialog()}>Report feedback</button>
            )
        } else {
            //when there's not an error, render children untouched
            return this.props.children
        }
    }
}

export default ErrorMonitoring