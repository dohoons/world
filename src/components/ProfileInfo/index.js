import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import * as profileActions from '~/store/modules/profile'
import goLogin from '~/util/goLogin'

import ProfileInfo from './style'

const Profile = (props) => {
  const history = useHistory()
  const { t } = useTranslation('components')

  const { user, userInfo } = useSelector(state => state.auth)
  const { profile } = useSelector(state => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(profileActions.fetch(props.username))

    return () => {
      dispatch(profileActions.reset())
    }
  }, [dispatch, props.username])

  const follow = async (follow) => {
    if(!user) {
      goLogin(history)
      return
    }

    dispatch(
      profileActions[ follow ? 'follow' : 'unfollow' ](props.username)
    )
  }

  if (profile.loading) return <div>Loading...</div>

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
          { (canFollow || !user) && <button type="button" className="btn light" onClick={()=> {follow(true)}}>{t('profileInfo.follow')} {username}</button> }
          { canUnFollow && <button type="button" className="btn light" onClick={()=> {follow(false)}}>{t('profileInfo.unfollow')} {username}</button> }
          { isMe && <button type="button" className="btn light" onClick={() => { history.push('/profile') }}>{t('profileInfo.profile')}</button> }
        </div>
      }
    </ProfileInfo>
  )
}

export default Profile