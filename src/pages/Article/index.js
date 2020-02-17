import React, { useEffect, useCallback } from 'react'
import { useHistory } from "react-router-dom"
import { hot } from 'react-hot-loader/root'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Helmet } from "react-helmet"
import * as articleActions from '~/store/modules/article'
import API from '~/api'
import { useAlert } from 'react-alert'

import ReactPlaceholder from 'react-placeholder'
import AuthorInfo from '~/components/AuthorInfo'
import BtnLike from '~/components/BtnLike'
import CommentForm from '~/components/CommentForm'
import CommentList from '~/components/CommentList'
import TagList from '~/components/TagList'
import goLogin from '~/util/goLogin'
import usePushBack from '~/util/usePushBack'

import Page, { ArticleHeader, ArticleBody } from './style'

const Article = (props) => {
  const history = useHistory()
  const { slug } = props.match.params

  const { t } = useTranslation('article')
  const alert = useAlert()
  const pushBack = usePushBack()

  const { user } = useSelector(state => state.auth)
  const { article, comments, error } = useSelector(state => state.article)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(articleActions.reset())
    dispatch(articleActions.fetch(slug))

    return () => {
      dispatch(articleActions.reset())
    }
  }, [dispatch, slug])

  const del = async () => {
    if(!user) {
      goLogin(history)
      return
    }

    if(window.confirm(t('confirmDelete'))) {
      try {
        await API.Articles.delete({ slug })
        pushBack()
      } catch(e) {
        if(e.response.data.errors.article[0] === 'not owned by user') {
          alert.error(t('canAuthorDelete'))
        } else {
          alert.error(t('errorDelete'))
        }
      }
    }
  }

  const delComment = useCallback(async (slug, commentId) => {
    if(!user) {
      goLogin(history)
      return
    }

    if(window.confirm(t('components:comment.confirmDelete'))) {
      try {
        await API.Comments.delete({ slug, commentId })
        dispatch(articleActions.deleteComment(commentId))
      } catch (e) {
        alert.error(t('components:comment.errorDelete'))
      }
    }
  }, [user, t, history, dispatch, alert])

  if(!article) {
    if(error && error.status === '404') {
      history.goBack()
      return null
    } else {
      return <div className="page-loading">
        <ReactPlaceholder showLoadingAnimation={true} type='text' ready={false} rows={20} color='#E0E0E0'><div></div></ReactPlaceholder>
      </div>
    }
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
          <div className="body" dangerouslySetInnerHTML={{ __html: article.bodyHTML }}></div>
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

export default hot(Article)