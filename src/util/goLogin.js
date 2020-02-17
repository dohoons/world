export default props => {
  props.push({
    pathname: '/login',
    state: {
      prevLocation: props.location.pathname,
      loginMsg: true
    }
  })

  return null
}