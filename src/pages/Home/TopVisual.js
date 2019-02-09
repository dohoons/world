import React, { useState, useEffect } from 'react'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'

import { Top } from './style'

const TopVisual = () => {
  const [ init, setInit ] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setInit(true)
    },10)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Top className={ `home-head ${ init ? `init` : `` }` }>
      <p className="copy"><span className="hello">Hello</span> World</p>
    </Top>
  )
}

export default compose(
  withNamespaces('home'),
)(TopVisual)