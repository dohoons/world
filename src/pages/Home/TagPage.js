import React, { useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'

import ArticleList from '~/components/ArticleList'
import { TagTitle } from './style'

const TagPage = ({ history, match: { params } }) => {
  const { tag, page } = params

  const getPageUrl = useCallback(pageNumber => {
    return `/tag/${tag}/${pageNumber}`
  }, [tag])

  const handlePageChange = useCallback(pageNumber => {
    history.push(getPageUrl(pageNumber))
  }, [getPageUrl])

  return (
    <>
      <TagTitle>Tag <span>#{tag}</span></TagTitle>
      <ArticleList
        filter="tag"
        tag={tag}
        page={page}
        handlePageChange={handlePageChange}
        getPageUrl={getPageUrl}
        useTotal={true}
      />
    </>
  )
}

export default compose(
  withRouter,
  withNamespaces('home'),
)(TagPage)