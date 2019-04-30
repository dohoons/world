import React from 'react'
import { Link } from 'react-router-dom'
import Info from './style'

const AuthorInfo = ({ username, image, createdAt }) => (
  <Info>
    <Link to={`/@${username}`} className="link">
      <div className="img"><img src={image ? image : `${process.env.PUBLIC_URL}/assets/profile-dummy.jpg` } alt="" /></div>
      <p className="name">{username}</p>
    </Link>
    <p className="date">{new Date(createdAt).toDateString()}</p>
  </Info>
)

export default React.memo(AuthorInfo)