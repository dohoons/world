import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"
import * as articleActions from '~/store/modules/article'
import API from '~/api'
import { withAlert } from 'react-alert'

import ReactPlaceholder from 'react-placeholder'
import AuthorInfo from '~/components/AuthorInfo'
import BtnLike from '~/components/BtnLike'
import CommentForm from '~/components/CommentForm'
import CommentList from '~/components/CommentList'
import TagList from '~/components/TagList'
import goLogin from '~/util/goLogin'
import withPushBack from '~/util/withPushBack'

import Page, { ArticleHeader, ArticleBody } from './style'

const Article = (props) => {
  const { article, comments, user, articleActions, history, pushBack, t, lng } = props
  const { slug } = props.match.params

  useEffect(() => {
    articleActions.reset()
    articleActions.fetch(slug)

    return () => {
      articleActions.reset()
    }
  }, [slug, user])

  const del = async () => {
    if(!user) {
      goLogin(props)
      return
    }

    if(window.confirm(t('confirmDelete'))) {
      try {
        await API.Articles.delete({ slug })
        pushBack()
      } catch(e) {
        if(e.response.data.errors.article[0] === 'not owned by user') {
          props.alert.error(t('canAuthorDelete'))
        } else {
          props.alert.error(t('errorDelete'))
        }
      }
    }
  }

  const delComment = useCallback(async (slug, commentId) => {
    if(!user) {
      goLogin(props)
      return
    }

    if(window.confirm(t('components:comment.confirmDelete'))) {
      try {
        await API.Comments.delete({ slug, commentId })
        articleActions.deleteComment(commentId)
      } catch (e) {
        props.alert.error(t('components:comment.errorDelete'))
      }
    }
  }, [user, lng])

  if(!article) {
    return <div className="page-loading">
      <ReactPlaceholder showLoadingAnimation={true} type='text' ready={false} rows={20} color='#E0E0E0'><div></div></ReactPlaceholder>
    </div>
  }

  return (
    <Page>
      <Helmet title={article.title} />
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
          <button type="button" className="btn" onClick={del}>{t('common:delete')}</button>{' '}
          <button type="button" className="btn" onClick={history.goBack}>{t('common:list')}</button>
        </div>

        <h3 className="comment-title">{t('components:comment.heading')}</h3>
        <CommentForm
          slug={article.slug}
        />
        <CommentList
          slug={article.slug}
          comments={comments}
          deleteComment={delComment}
        />
      </div>
    </Page>
  )
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
  withPushBack,
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('article'),
)(Article)