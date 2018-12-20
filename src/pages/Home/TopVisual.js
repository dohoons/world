import React, { Component } from 'react'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'

import { Top } from './style'

class TopVisual extends Component {
  state = {
    init: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({
        init: true
      }))
    },10)
  }
  
  render() {
    const { init } = this.state
    
    return (
      <Top className={ `home-head ${ init ? `init` : `` }` }>
        <p className="copy"><span className="hello">Hello</span> World</p>
      </Top>
    )
  }
}

export default compose(
  withNamespaces('home'),
)(TopVisual)