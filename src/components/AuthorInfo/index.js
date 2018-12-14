import React from 'react'
import { Link } from 'react-router-dom'
import AuthorInfo from './style'

export default ({ username, image, createdAt }) => (
  <AuthorInfo>
    <Link to={`/@${username}`} className="link">
      <div className="img"><img src={image ? image : `${process.env.PUBLIC_URL}/assets/profile-dummy.jpg` } alt="" /></div>
      <p className="name">{username}</p>
    </Link>
    <p className="date">{new Date(createdAt).toDateString()}</p>
  </AuthorInfo>
)