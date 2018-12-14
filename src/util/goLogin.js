export default props => {
  props.history.push({
    pathname: '/login',
    state: {
      prevLocation: props.location.pathname,
      loginMsg: true
    }
  })

  return null
}