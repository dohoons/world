import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import ArticleList from '~/components/ArticleList'
import { TagTitle } from './style'

const TagPage = ({ history, match: { params } }) => {
  const { tag, page } = useParams()

  const decodeTag = decodeURIComponent(tag)

  const getPageUrl = useCallback(pageNumber => {
    return `/tag/${tag}/${pageNumber}`
  }, [tag])

  const handlePageChange = useCallback(pageNumber => {
    history.push(getPageUrl(pageNumber))
  }, [getPageUrl, history])

  return (
    <>
      <TagTitle>Tag <span>#{decodeTag}</span></TagTitle>
      <ArticleList
        filter="tag"
        tag={decodeTag}
        page={page}
        handlePageChange={handlePageChange}
        getPageUrl={getPageUrl}
        useTotal={true}
      />
    </>
  )
}

export default TagPage