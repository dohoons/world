import React, { useState, useEffect } from 'react'
import { useSelector, useActions } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Helmet } from "react-helmet"
import validator from 'validator'
import * as authActions from '~/store/modules/auth'
import withPushBack from '~/util/withPushBack'

import Page from './style'

const ProfileEdit = (props) => {
  const { history } = props
  const { t } = useTranslation('profileEdit')
  const { userInfo, loading, error } = useSelector(state => state.auth, [])
  const actions = useActions(authActions, [])
  const [ errors, setErrors ] = useState({})
  const [ form, setForm ] = useState({
    image: userInfo.image,
    username: userInfo.username,
    bio: userInfo.bio,
    email: userInfo.email,
    password: '',
  })
  const { image, username, bio, email, password } = form

  useEffect(() => {
    return () => {
      actions.resetAuth()
    }
  }, [actions, userInfo])

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

    if(!validator.isEmpty(password) && !validator.isLength(password, { min: 8 })) {
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
      const userData = {
        image,
        bio,
        email,
        ...username !== userInfo.username && { username },
        ...password !== '' && { password },
      }

      actions.update({ user: userData })
        .then(() => {
          if(userData.username === undefined) {
            props.pushBack()
          } else {
            history.push(`/@${userData.username}`)
          }
        })
        .catch(console.log)
    }

    e.preventDefault()
  }

  const changeInput = name => e => {
    setForm({
      ...form,
      [name]: e.target.value,
    })
  }

  return (
    <Page className="container">
      <Helmet title={t('heading')} />
      <div className="common-form">
        <h2 className="form-title">{t('heading')}</h2>
        <form onSubmit={submitHandle}>
          <fieldset>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('image')}
                </span>
                <input type="text" placeholder={t('imageURL')} className="txt large block" disabled={loading} value={image} onChange={changeInput('image')} />
              </label>
              { errors.image && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.image}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('username')}
                </span>
                <input type="text" placeholder={t('username')} className="txt large block" disabled={loading} value={username} onChange={changeInput('username')} />
              </label>
              { errors.username && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.username}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('bio')}
                </span>
                <textarea cols="60" rows="10" placeholder={t('bio')} className="txt large block" disabled={loading} value={bio} onChange={changeInput('bio')}></textarea>
              </label>
              { errors.bio && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.bio}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('email')}
                </span>
                <input type="text" placeholder={t('email')} className="txt large block" disabled={loading} value={email} onChange={changeInput('email')} />
              </label>
              { errors.email && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.email}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('newPassword')}
                </span>
                <input type="password" placeholder={t('newPassword')} className="txt large block" disabled={loading} value={password} onChange={changeInput('password')} />
              </label>
              { errors.password && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.password}</p> }
            </div>
            { loading && <div>{t('sending')}</div> }
            { error.length > 0 && error.map(err => <p className="input-error" key={err}><i className="fas fa-times-circle"></i> {err}</p>) }

            <div className="form-action">
              <button type="submit" className="btn large primary" disabled={loading}>{t('common:modify')}</button>{' '}
              <button type="button" className="btn large" disabled={loading} onClick={history.goBack}>{t('common:cancel')}</button>
            </div>
          </fieldset>
        </form>
      </div>
    </Page>
  )
}

export default withPushBack(ProfileEdit)