import React, { useState, useRef } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withNamespaces, Trans } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import * as articleActions from '~/store/modules/article'
import { withAlert } from 'react-alert'

import Form, { LoginMsg } from './style'

const CommentForm = ({ user, articleActions, slug, t, alert }) => {
  const [ loading, setLoading ] = useState(false)
  const [ comment, setComment ] = useState('')
  const inputEl = useRef(null);

  const submitHandle = e => {
    e.preventDefault()

    const commentValue = comment.trim()

    if(commentValue === '') {
      alert.show(t('validate:emptyBody'))
      inputEl.current.focus()
      return
    }

    setLoading(true)

    articleActions.createComment({
      slug,
      comment: {
        body: commentValue
      }
    })
    .then(() => {
      setLoading(false)
      setComment('')
    })
    .catch(() => {
      alert.error(t('comment.errorWrite'))
      setLoading(false)
    })
  }

  const changeInput = e => setComment(e.target.value)

  if(!user) {
    return <LoginMsg className="login-msg">
      <i className="fas fa-info-circle"></i> <Trans i18nKey="comment.loginMsg">
        댓글을 남기려면 <Link to="/login">로그인</Link>이 필요합니다.
      </Trans>
    </LoginMsg>
  }

  return (
    <Form onSubmit={submitHandle}>
      <div className="comment-txt">
        <textarea
          ref={inputEl}
          rows="10"
          cols="40"
          placeholder={t('comment.placeHolder')}
          value={comment}
          onChange={changeInput}
          disabled={loading}
        ></textarea>
      </div>
      <div className="action">
        <button type="submit" className="btn light">{t('comment.submit')}</button>
      </div>
    </Form>
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
  withRouter,
  withAlert,
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('components'),
)(CommentForm)