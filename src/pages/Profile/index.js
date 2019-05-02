import React, { useCallback } from 'react'
import { hot } from 'react-hot-loader/root'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from "react-helmet"

import ProfileInfo from '~/components/ProfileInfo'
import ArticleList from '~/components/ArticleList'
import TabNav from '~/components/TabNav'

import Page from './style'

const Profile = ({ match: { params }, history }) => {
  const { t } = useTranslation('profile')
  const { username } = params
  const isRoot = params.filter === undefined

  const getListType = useCallback(() => {
    const isArticles = isRoot || params.filter === 'articles'
    return isArticles ? 'articles' : 'favorites'
  }, [isRoot, params.filter])

  const getPageUrl = useCallback(pageNumber => {
    return `/@${username}/${getListType()}/${pageNumber}`
  }, [getListType, username])

  const handlePageChange = useCallback(pageNumber => {
    history.push(getPageUrl(pageNumber))
  }, [getPageUrl, history])

  const listType = getListType()
  const page = isRoot ? params.filter : params.page
  
  return (
    <Page>
      <Helmet title={`@${username}`} />
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

export default hot(Profile)