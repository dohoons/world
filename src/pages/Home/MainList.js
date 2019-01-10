import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'

import ArticleList from '~/components/ArticleList'
import TabNav from '~/components/TabNav'

class MainList extends Component {
  isRoot = () => {
    return this.props.match.url === '/'
  }

  getListType = () => {
    const isFeed =  this.isRoot() || this.props.match.url.split('/')[1] === 'feed'
    return isFeed ? this.props.user ? 'feed' : 'all' : 'all'
  }

  getPageUrl = pageNumber => {
    return `/${this.getListType() === 'feed' ? 'feed' : 'articles' }/${pageNumber}`
  }
  
  handlePageChange = pageNumber => {
    this.props.history.push(this.getPageUrl(pageNumber))
  }

  render() {
    const { user, match: { params }, t } = this.props
    const listType = this.getListType()
    const page = this.isRoot() ? params.filter : params.page

    return (
      <>
        <TabNav>
          {
            user ?
            <li className={ listType === 'feed' ? 'selected' : '' }><Link to={`/feed`}>{t('myfeed')}</Link></li> :
            <li><Link to={`/feed`} onClick={
              e => {
                e.preventDefault()
                this.props.alert.show(t('loginMsg'))
              }
            }>{t('myfeed')}<span className="sub">({t('needLogin')})</span></Link></li>
          }
          <li className={ listType === 'all' ? 'selected' : '' }><Link to={`/articles`}>{t('globalfeed')}</Link></li>
        </TabNav>

        <ArticleList
          filter={listType}
          page={page}
          handlePageChange={this.handlePageChange}
          getPageUrl={this.getPageUrl}
          useTotal={true}
        />
      </>
    )
  }
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