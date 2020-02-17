import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Helmet } from "react-helmet"
import validator from 'validator'
import * as authActions from '~/store/modules/auth'
import usePushBack from '~/util/usePushBack'
import useForm from '~/util/useForm'

import Page from './style'

const ProfileEdit = (props) => {
  const { history } = props
  const { t } = useTranslation('profileEdit')
  const pushBack = usePushBack()
  const { userInfo, loading, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [ errors, setErrors ] = useState({})
  const { form, bindInput } = useForm({
    image: userInfo.image || '',
    username: userInfo.username || '',
    bio: userInfo.bio || '',
    email: userInfo.email || '',
    password: '',
  })
  const { image, username, bio, email, password } = form

  useEffect(() => {
    return () => {
      dispatch(authActions.resetAuth())
    }
  }, [dispatch, userInfo])

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

  const submitHandle = async (e) => {
    setErrors({})

    if(validate()) {
      const userData = {
        image,
        bio,
        email,
        ...username !== userInfo.username && { username },
        ...password !== '' && { password },
      }

      try {
        await dispatch(authActions.update({ user: userData }))

        if(userData.username === undefined) {
          pushBack()
        } else {
          history.push(`/@${userData.username}`)
        }
      } catch(e) {
        console.log(e)
      }
    }

    e.preventDefault()
  }

  const disableForm = loading || email === 'test@naver.com'

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
                <input type="text" {...bindInput('image')} placeholder={t('imageURL')} className="txt large block" disabled={disableForm} />
              </label>
              { errors.image && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.image}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('username')}
                </span>
                <input type="text" {...bindInput('username')} placeholder={t('username')} className="txt large block" disabled={disableForm} />
              </label>
              { errors.username && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.username}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('bio')}
                </span>
                <textarea cols="60" rows="10" {...bindInput('bio')} placeholder={t('bio')} className="txt large block" disabled={disableForm}></textarea>
              </label>
              { errors.bio && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.bio}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('email')}
                </span>
                <input type="text" {...bindInput('email')} placeholder={t('email')} className="txt large block" disabled={disableForm} />
              </label>
              { errors.email && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.email}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('newPassword')}
                </span>
                <input type="password" {...bindInput('password')} placeholder={t('newPassword')} className="txt large block" disabled={disableForm} />
              </label>
              { errors.password && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.password}</p> }
            </div>
            { disableForm && <div>{t('demoUserMsg')}</div> }
            { loading && <div>{t('sending')}</div> }
            { error.length > 0 && error.map(err => <p className="input-error" key={err}><i className="fas fa-times-circle"></i> {err}</p>) }

            <div className="form-action">
              <button type="submit" className="btn large primary" disabled={disableForm}>{t('common:modify')}</button>{' '}
              <button type="button" className="btn large" disabled={loading} onClick={history.goBack}>{t('common:cancel')}</button>
            </div>
          </fieldset>
        </form>
      </div>
    </Page>
  )
}

export default hot(ProfileEdit)