import React, { useCallback } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'

import ArticleList from '~/components/ArticleList'
import TabNav from '~/components/TabNav'

const MainList = (props) => {
  const { user, match: { params, url }, history, t } = props
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
              props.alert.show(t('loginMsg'))
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

const mapStateToProps = (state) => ({
    user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
})

export default compose(
  withRouter,
  withAlert,
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('home'),
)(MainList)