import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withNamespaces, Trans } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"
import * as authActions from '~/store/modules/auth'
import validator from 'validator'

import Page from './style'

const Login = (props) => {
  const { user, loading, error, authActions, history, location, t } = props
  const [ errors, setErrors ] = useState({})
  const [ form, setForm ] = useState({
    email: '',
    password: '',
  })
  const { email, password } = form

  useEffect(() => {
    return () => {
      authActions.resetAuth()
    }
  }, [authActions, user])

  const validate = () => {
    const errors = {}

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
      authActions.login({ email, password }).then(() => {
        if(!location.state) {
          history.goBack()
        }
      })
    }

    e.preventDefault()
  }

  const changeInput = name => e => {
    setForm({
      ...form,
      [name]: e.target.value,
    })
  }

  const { prevLocation, loginMsg } = location.state || { prevLocation: { pathname: '/' }, loginMsg: false }
  const errorMsg = error[0] === 'email or password is invalid' ? t('invalidLoginInfo') : t('loginFail')

  return user ?
  <Redirect to={prevLocation} />
  :
  (
    <Page className="container">
      <Helmet title={t('heading')} />
      <div className="common-form">
        <h2 className="form-title">{t('heading')}</h2>
        {
          loginMsg &&
          <p className="login-msg"><i className="fas fa-info-circle"></i> {t('needLogin')}</p> 
        }
        <form onSubmit={submitHandle}>
          <fieldset>
            <legend>{t('heading')}</legend>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('email')}
                </span>
                <input type="email" placeholder={t('email')} className="txt large block" disabled={loading} onChange={changeInput('email')} />
              </label>
              { errors.email && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.email}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('password')}
                </span>
                <input type="password" placeholder={t('password')} className="txt large block" disabled={loading} onChange={changeInput('password')} />
              </label>
              { errors.password && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.password}</p> }
            </div>
            { loading && <div>{t('sending')}</div> }
            { error.length > 0 && <p className="input-error"><i className="fas fa-times-circle"></i> {errorMsg}</p> }

            <div className="form-action">
              <button type="submit" className="btn large primary" disabled={loading}>{t('login')}</button>
            </div>
          </fieldset>
        </form>

        <div className="info-box">
          <Trans i18nKey="infoDesc">
            처음 오셨나요? <Link to="/join">회원가입</Link>을 해주세요.
          </Trans>
        </div>
      </div>
    </Page>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
})

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('login'),
)(Login)