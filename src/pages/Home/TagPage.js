import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'

import ArticleList from '~/components/ArticleList'
import { TagTitle } from './style'

class TagPage extends Component {
  handlePageChange = pageNumber => {
    this.props.history.push(`/tag/${this.props.match.params.tag}/${pageNumber}`)
  }

  render() {
    const { match: { params } } = this.props
    const { tag, page } = params

    return (
      <>
        <TagTitle>Tag <span>#{tag}</span></TagTitle>

        <ArticleList
          filter="tag"
          tag={tag}
          page={page}
          handlePageChange={this.handlePageChange}
          getPageUrl={this.getPageUrl}
          useTotal={true}
        />
      </>
    )
  }
}

export default compose(
  withRouter,
  withNamespaces('home'),
)(TagPage)