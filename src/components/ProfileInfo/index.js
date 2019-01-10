import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import * as profileAction from '~/store/modules/profile'
import goLogin from '~/util/goLogin'

import ProfileInfo from './style'

class Profile extends Component {
  componentDidMount() {
    this.props.profileAction.fetch(this.props.username)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.username !== this.props.username) {
      this.props.profileAction.fetch(this.props.username)
    }
  }
  
  componentWillUnmount() {
    this.props.profileAction.reset()
  }

  follow = async (follow) => {
    if(!this.props.user) {
      goLogin(this.props)
      return
    }

    this.props.profileAction[ follow ? 'follow' : 'unfollow' ](this.props.username)
  }

  render() {
    const { user, userInfo, loading, profile, history, t } = this.props

    if (loading) return <div>Loading...</div>

    const { username, bio, image, following } = profile
    const isMe = username !== undefined && username === userInfo.username
    const canFollow = !isMe && following === false
    const canUnFollow = !isMe && following === true

    return (
      <ProfileInfo>
          <Link to={`/@${username}`}>
            <div className="img"><img src={image ? image : `${process.env.PUBLIC_URL}/assets/profile-dummy.jpg` } alt="" /></div>
          </Link>
          <h2 className="username"><Link to={`/@${username}`}>{username}</Link></h2>
          <p className="bio">{bio}</p>
          {
            username &&
            <div className="action">
              { (canFollow || !user) && <button type="button" className="btn light" onClick={()=> {this.follow(true)}}>{t('profileInfo.follow')} {username}</button> }
              { canUnFollow && <button type="button" className="btn light" onClick={()=> {this.follow(false)}}>{t('profileInfo.unfollow')} {username}</button> }
              { isMe && <button type="button" className="btn light" onClick={() => { history.push('/profile') }}>{t('profileInfo.profile')}</button> }
            </div>
          }
      </ProfileInfo>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  userInfo: state.auth.userInfo,
  profile: state.profile.profile,
})

const mapDispatchToProps = (dispatch) => ({
  profileAction: bindActionCreators(profileAction, dispatch)
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('components'),
)(Profile)