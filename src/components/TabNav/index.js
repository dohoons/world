import React from 'react'
import Nav from './style'

const TabNav = (props) => (
  <Nav>
    {props.children}
  </Nav>
)

export default React.memo(TabNav)