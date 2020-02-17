import React, { useCallback } from 'react'
import { Link, useRouteMatch, useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import ArticleList from '~/components/ArticleList'
import TabNav from '~/components/TabNav'

const MainList = () => {
  const { params, url } = useRouteMatch()
  const history = useHistory()
  const { t } = useTranslation('home')
  const alert = useAlert()
  const { user } = useSelector(state => state.auth)
  const isRoot = url === '/'

  const getListType = useCallback(() => {
    const isFeed =  isRoot || url.split('/')[1] === 'feed'
    return isFeed ? user ? 'feed' : 'all' : 'all'
  }, [isRoot, url, user])

  const getPageUrl = useCallback(pageNumber => {
    return `/${getListType() === 'feed' ? 'feed' : 'articles' }/${pageNumber}`
  }, [getListType])

  const handlePageChange = useCallback(pageNumber => {
    history.push(getPageUrl(pageNumber))
  }, [getPageUrl, history])

  const listType = getListType()
  const page = isRoot ? params.filter : params.page
  
  return (
    <>
      <TabNav>
        {
          user ?
          <li className={ listType === 'feed' ? 'selected' : '' }><Link to={`/feed`}>{t('myfeed')}</Link></li> :
          <li><Link to={`/feed`} onClick={
            e => {
              e.preventDefault()
              alert.show(t('loginMsg'))
            }
          }>{t('myfeed')}<span className="sub">({t('needLogin')})</span></Link></li>
        }
        <li className={ listType === 'all' ? 'selected' : '' }><Link to={`/articles`}>{t('globalfeed')}</Link></li>
      </TabNav>

      <ArticleList
        filter={listType}
        page={page}
        handlePageChange={handlePageChange}
        getPageUrl={getPageUrl}
        useTotal={true}
      />
    </>
  )
}

export default MainList