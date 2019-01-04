import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"
import * as articleActions from 'store/modules/article'
import API from 'api'
import { withAlert } from 'react-alert'

import ReactPlaceholder from 'react-placeholder'
import AuthorInfo from 'components/AuthorInfo'
import BtnLike from 'components/BtnLike'
import CommentForm from 'components/CommentForm'
import CommentList from 'components/CommentList'
import TagList from 'components/TagList'
import goLogin from 'util/goLogin'

import Page, { ArticleHeader, ArticleBody } from './style'

class Article extends Component {
  componentDidMount() {
    const { articleActions } = this.props
    articleActions.reset()
    articleActions.fetch(this.props.match.params.slug, this.props.history.action === 'POP')
  }

  componentWillUnmount() {
    const { articleActions } = this.props
    articleActions.reset()
  }

  delete = async () => {
    const { slug } = this.props.match.params
    const { history, t } = this.props

    if(window.confirm(t('confirmDelete'))) {
      try {
        await API.Articles.delete({ slug })
        history.goBack()
      } catch(e) {
        if(e.response.data.errors.article[0] === 'not owned by user') {
          this.props.alert.error(t('canAuthorDelete'))
        } else {
          this.props.alert.error(t('errorDelete'))
        }
      }
    }
  }

  deleteComment = async (slug, commentId) => {
    const { user, articleActions, t } = this.props

    if(!user) {
      goLogin(this.props)
      return
    }

    if(window.confirm(t('components:comment.confirmDelete'))) {
      try {
        await API.Comments.delete({ slug, commentId })
        articleActions.deleteComment(commentId)
      } catch (e) {
        this.props.alert.error(t('components:comment.errorDelete'))
      }
    }
  }

  render() {
    const { history, article, comments, t } = this.props

    if(!article) {
      return <div className="page-loading">
        <ReactPlaceholder showLoadingAnimation={true} type='text' ready={false} rows={20} color='#E0E0E0'><div></div></ReactPlaceholder>
      </div>
    }

    return (
      <Page>
        <Helmet>
          <title>{article.title} - {t('common:siteName')}</title>
        </Helmet>
        <ArticleHeader>
          <div className="wrap">
            <h2 className="subject">{article.title}</h2>
            <p className="desc">{article.description}</p>
            <div className="info">
              <AuthorInfo
                image={article.author.image}
                username={article.author.username}
                createdAt={article.createdAt}
              />
              <BtnLike
                slug={article.slug}
                favorited={article.favorited}
                favoritesCount={article.favoritesCount}
              />
            </div>
          </div>
        </ArticleHeader>
        <div className="container">
        	<ArticleBody>
            <div className="body" dangerouslySetInnerHTML={{ __html: article.body }}></div>
            <TagList tags={article.tagList} />
          </ArticleBody>
          
        	<div className="page-foot">
        	  <button type="button" className="btn" onClick={() => history.push(`/form/${article.slug}`)}>{t('common:modify')}</button>{' '}
        	  <button type="button" className="btn" onClick={this.delete}>{t('common:delete')}</button>{' '}
        	  <button type="button" className="btn" onClick={history.goBack}>{t('common:list')}</button>
        	</div>
        	
        	<h3 className="comment-title">{t('components:comment.heading')}</h3>
        	<CommentForm
        	  slug={article.slug}
        	/>
        	<CommentList
        	  slug={article.slug}
        	  comments={comments}
        	  deleteComment={this.deleteComment}
        	/>
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  userInfo: state.auth.userInfo,
  loading: state.article.loading,
  article: state.article.article,
  comments: state.article.comments,
})

const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActions, dispatch)
})

export default compose(
  withAlert,
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('article'),
)(Article)