import React, { Component } from 'react'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"
import * as tagsActions from 'store/modules/tags'
import needAuth from 'util/needAuth'

import ArticleList from 'components/ArticleList'
import TabNav from 'components/TabNav'
import TagList from 'components/TagList'

import Page, { Top, TagTitle } from './style'

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

const MainPage = compose(
  withRouter,
  withAlert,
  withNamespaces('home'),
)(MainList)

class TagSearch extends Component {
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

const TagPage = compose(
  withRouter,
  withNamespaces('home'),
)(TagSearch)

class Home extends Component {
  state = {
    init: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({
        init: true
      }))
    },10)

    this.props.tagsActions.fetch()
  }

  render() {
    const { tags, t } = this.props
    const { init } = this.state

    return (
      <Page>
        <Helmet>
          <title>Home - {t('common:siteName')}</title>
        </Helmet>
        <Top className={ `home-head ${ init ? `init` : `` }` }>
          <p className="copy"><span className="hello">Hello</span> World</p>
        </Top>
        <div className="container">
          <div className="body">
            <Switch>
              <Route path="/articles/:page?" component={() => <MainPage user={this.props.user} />} />
              <Route path="/feed/:page?" component={needAuth(() => <MainPage user={this.props.user} />)} />
              <Route path="/tag/:tag/:page?" component={() => <TagPage user={this.props.user} />} />
              <Route component={() => <MainPage user={this.props.user} />} />
            </Switch>
          </div>
          <div className="side">
            <div className="tag-area">
              <h2 className="title">{t('hotTag')}</h2>
              <TagList tags={tags} />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  tags: state.tags.tags
})

const mapDispatchToProps = (dispatch) => ({
  tagsActions: bindActionCreators(tagsActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('home'),
)(Home)