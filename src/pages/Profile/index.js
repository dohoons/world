import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"

import ProfileInfo from '~/components/ProfileInfo'
import ArticleList from '~/components/ArticleList'
import TabNav from '~/components/TabNav'

import Page from './style'

class Profile extends Component {
  isRoot = () => {
    return this.props.match.params.filter === undefined
  }

  getListType = () => {
    const isArticles = this.isRoot() || this.props.match.params.filter === 'articles'
    return isArticles ? 'articles' : 'favorites'
  }

  getPageUrl = pageNumber => {
    const { username } = this.props.match.params
    return `/@${username}/${this.getListType()}/${pageNumber}`
  }
  
  handlePageChange = pageNumber => {
    this.props.history.push(this.getPageUrl(pageNumber))
  }

  render() {
    const { match: { params }, t } = this.props
    const { username } = params

    const listType = this.getListType()
    const page = this.isRoot() ? params.filter : params.page

    return (
      <Page>
        <Helmet>
          <title>@{username} - {t('common:siteName')}</title>
        </Helmet>
        <ProfileInfo
          username={username}
        />

        <div className="container">
          <TabNav>
            <li className={ listType === 'articles' ? 'selected' : '' }><Link to={`/@${username}`}>{t('myArticles')}</Link></li>
            <li className={ listType === 'favorites' ? 'selected' : '' }><Link to={`/@${username}/favorites`}>{t('favoritedArticles')}</Link></li>
          </TabNav>
  
          <ArticleList
            username={username}
            filter={listType}
            page={page}
            handlePageChange={this.handlePageChange}
            getPageUrl={this.getPageUrl}
            useTotal={true}
            countPerPage={5}
          />
        </div>
      </Page>
    )
  }
}

export default compose(
  withNamespaces('profile'),
)(Profile)