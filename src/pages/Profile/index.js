import React from 'react'
import { Link } from 'react-router-dom'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"

import ProfileInfo from '~/components/ProfileInfo'
import ArticleList from '~/components/ArticleList'
import TabNav from '~/components/TabNav'

import Page from './style'

const Profile = ({ match: { params }, history, t }) => {
  const { username } = params
  const isRoot = params.filter === undefined

  const getListType = () => {
    const isArticles = isRoot || params.filter === 'articles'
    return isArticles ? 'articles' : 'favorites'
  }

  const getPageUrl = pageNumber => {
    return `/@${username}/${getListType()}/${pageNumber}`
  }

  const handlePageChange = pageNumber => {
    history.push(getPageUrl(pageNumber))
  }

  const listType = getListType()
  const page = isRoot ? params.filter : params.page
  
  return (
    <Page>
      <Helmet title={`@${username} - ${t('common:siteName')}`} />
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
          handlePageChange={handlePageChange}
          getPageUrl={getPageUrl}
          useTotal={true}
          countPerPage={5}
        />
      </div>
    </Page>
  )
}

export default compose(
  withNamespaces('profile'),
)(Profile)