import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation, Trans } from 'react-i18next'
import { Helmet } from "react-helmet"
import * as authActions from '~/store/modules/auth'
import useForm from '~/util/useForm'
import validator from 'validator'

import Page from './style'

const Join = (props) => {
  const { history } = props
  const { t } = useTranslation('join')
  const { user, loading, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [ errors, setErrors ] = useState({})
  const { form, bindInput } = useForm({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = form

  useEffect(() => {
    return () => {
      dispatch(authActions.resetAuth())
    }
  }, [dispatch, user])

  const validate = () => {
    const errors = {}

    if(validator.isEmpty(username)) {
      errors.username = t('validate:emptyUsername')
    } else if(!validator.isLength(username, { min: 1, max: 20 })) {
      errors.username = t('validate:lengthUsername')
    }

    if(validator.isEmpty(email)) {
      errors.email = t('validate:emptyEmail')
    } else if(!validator.isEmail(email)) {
      errors.email = t('validate:notEmail')
    }

    if(validator.isEmpty(password)) {
      errors.password = t('validate:emptyPassword')
    } else if(!validator.isLength(password, { min: 8 })) {
      errors.password = t('validate:lengthPassword')
    }

    if(Object.keys(errors).length === 0) {
      return true

    } else {
      setErrors(errors)
      return false
    }
  }

  const submitHandle = (e) => {
    setErrors({})

    if(validate()) {
      dispatch(authActions.register({ username, email, password }))
    }

    e.preventDefault()
  }

  return user ?
  <Redirect to="/" />
  :
  (
    <Page className="container">
      <Helmet title={t('heading')} />
      <div className="common-form">
        <h2 className="form-title">{t('heading')}</h2>
        <form onSubmit={submitHandle}>
          <fieldset>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('username')}
                </span>
                <input type="text" {...bindInput('username')} placeholder={t('username')} className="txt large block" disabled={loading}/>
              </label>
              { errors.username && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.username}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('email')}
                </span>
                <input type="text" {...bindInput('email')}  placeholder={t('email')} className="txt large block" disabled={loading} />
              </label>
              { errors.email && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.email}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('password')}
                </span>
                <input type="password" {...bindInput('password')} placeholder={t('password')} className="txt large block" disabled={loading} />
              </label>
              { errors.password && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.password}</p> }
            </div>
            { loading && <div>{t('sending')}</div> }
            { error.length > 0 && error.map(err => <div key={err}>{err}</div>) }

            <div className="form-action">
              <button type="submit" className="btn large primary" disabled={loading}>{t('join')}</button>{' '}
              <button type="button" className="btn large" disabled={loading} onClick={history.goBack}>{t('common:cancel')}</button>
            </div>
          </fieldset>
        </form>

        <div className="info-box">
          <Trans i18nKey="infoDesc">
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>을 해주세요.
          </Trans>
        </div>
      </div>
    </Page>
  )
}

export default hot(Join)