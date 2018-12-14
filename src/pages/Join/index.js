import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withNamespaces, Trans } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"
import produce from "immer"
import * as authActions from 'store/modules/auth'
import validator from 'validator'

import Page from './style'

class Join extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    errors: {},
  }

  componentWillUnmount() {
    this.props.authActions.resetAuth()
  }

  validate() {
    const errors = {}
    const { t } = this.props
    const { username, email, password } = this.state

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
      this.setState(
        produce(draft => {
          draft.errors = errors
        })
      )

      return false
    }
  }

  submitHandle = (e) => {
    const { authActions } = this.props
    const { username, email, password } = this.state
    
    this.setState(
      produce(draft => {
        draft.errors = {}
      })
    )

    if(this.validate()) {
      authActions.register({ username, email, password })
      // .catch(e => {
      //   alert('회원가입에 실패했습니다.')
      // })
    }

    e.preventDefault()
  }

  changeInput = name => e => {
    const { value } = e.target
    this.setState(
      produce(draft => {
        draft[name] = value
      })
    )
  }

  render() {
    const { user, loading, history, error, t } = this.props
    const { username, email, password, errors } = this.state

    return user ?
      <Redirect to="/" />
      :
      (
        <Page className="container">
          <Helmet>
            <title>{t('heading')} - {t('common:siteName')}</title>
          </Helmet>
          <div className="common-form">
            <h2 className="form-title">{t('heading')}</h2>
            <form onSubmit={this.submitHandle}>
              <fieldset>
                <div className="form-row">
                  <label>
                    <span className="form-head">
                      {t('username')}
                    </span>
                    <input type="text" placeholder={t('username')} className="txt large block" disabled={loading} value={username} onChange={this.changeInput('username')} />
                  </label>
                  { errors.username && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.username}</p> }
                </div>
                <div className="form-row">
                  <label>
                    <span className="form-head">
                      {t('email')}
                    </span>
                    <input type="text" placeholder={t('email')} className="txt large block" disabled={loading} value={email} onChange={this.changeInput('email')} />
                  </label>
                  { errors.email && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.email}</p> }
                </div>
                <div className="form-row">
                  <label>
                    <span className="form-head">
                      {t('password')}
                    </span>
                    <input type="password" placeholder={t('password')} className="txt large block" disabled={loading} value={password} onChange={this.changeInput('password')} />
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
  withNamespaces('join'),
)(Join)