import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from 'store/modules/auth'

class Logout extends Component {
  constructor(props) {
    super(props)
    props.authActions.logout()
    props.history.goBack()
  }
  
  render() {
    return null
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)