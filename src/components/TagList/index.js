import React from 'react'
import { Link } from 'react-router-dom'
import Tag from './style'

export default ({ tags, currentTag, small }) => (
  <Tag small={small}>
    {
      tags.map((v) => (
        <li key={v}><Link to={`/tag/${v}`} className={ v === currentTag ? 'selected' : '' }>{v}</Link></li>
      ))
    }
  </Tag>
)