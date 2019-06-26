import React from 'react'
import { Link } from 'react-router-dom'
import Tag from './style'

const TagList = ({ tags, currentTag, small }) => (
  <Tag small={small}>
    {
      tags.map((v) => (
        <li key={v}><Link to={`/tag/${encodeURIComponent(v)}`} className={ v === currentTag ? 'selected' : '' }>{v}</Link></li>
      ))
    }
  </Tag>
)

export default React.memo(TagList)