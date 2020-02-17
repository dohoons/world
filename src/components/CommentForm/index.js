import React, { useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation, Trans } from 'react-i18next'
import * as articleActions from '~/store/modules/article'
import { useAlert } from 'react-alert'
import useForm from '~/util/useForm'

import Form, { LoginMsg } from './style'

const CommentForm = () => {
  const { slug } = useParams()
  const { t } = useTranslation('components')
  const alert = useAlert()
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [ loading, setLoading ] = useState(false)
  const { form: { comment }, setField, bindInput } = useForm({
    comment: '',
  })
  const inputEl = useRef(null)

  const submitHandle = async e => {
    e.preventDefault()

    const commentValue = comment.trim()

    if(commentValue === '') {
      alert.show(t('validate:emptyBody'))
      inputEl.current.focus()
      return
    }

    setLoading(true)

    try {
      await dispatch(
        articleActions.createComment({
          slug,
          comment: {
            body: commentValue
          }
        })
      )
      setLoading(false)
      setField('comment', '')
    } catch(e) {
      alert.error(t('comment.errorWrite'))
      setLoading(false)
    }
  }

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
          {...bindInput('comment')}
          disabled={loading}
        ></textarea>
      </div>
      <div className="action">
        <button type="submit" className="btn light">{t('comment.submit')}</button>
      </div>
    </Form>
  )
}

export default CommentForm