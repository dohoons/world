import React, { Component } from 'react'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"
import produce from "immer"
import API from '~/api'
import validator from 'validator'
import { withAlert } from 'react-alert'

import Page from './style'

class Form extends Component {
  state = {
    loading: false,
    sending: false,
    errors: {},
    slug: '',
    title: '',
    description: '',
    body: '',
    tag: '',
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      if(this.props.match.params.slug) {
        // slug 있음 - 수정

        this.fetchArticles(this.props.match.params.slug)
      } else {
        // slug 없음 - 신규등록

        this.setState(
          produce(draft => {
            draft.loading = false
            draft.sending = false
            draft.slug = ''
            draft.title = ''
            draft.description = ''
            draft.body = ''
            draft.tag = ''
          })
        )
      }
    }
  }

  componentDidMount() {
    const { params } = this.props.match

    if(params && params.slug) {
      this.fetchArticles(params.slug)
    }
  }

  componentWillUnmount() {
    if(this.req) this.req.cancel()
  }
  
  fetchArticles = async (slug) => {
    this.setState(
      produce(draft => {
        draft.loading = true
      })
    )
    
    const { history, userInfo, t } = this.props

    try {
      this.req = API.CancelToken.source()
      const { data } = await API.Articles.get({
        slug,
        config: { cancelToken: this.req.token },
      })
      const { article } = data

      if(article.author.username !== userInfo.username) {
        this.props.alert.error(t('errorModifyAuth'))
        history.goBack()
        return
      }

      this.setState(
        produce(draft => {
          draft.loading = false
          draft.slug = article.slug
          draft.title = article.title
          draft.description = article.description
          draft.body = article.body
          draft.tag = article.tagList.join(', ')
        })
      )
    } catch(e) {
      if(e.response && e.response.data.status === '404') {
        // alert('게시물이 없습니다.')
        history.goBack()
      }
    }
  }

  validate() {
    const errors = {}
    const { t } = this.props
    const { title, description, body } = this.state

    if(validator.isEmpty(title)) {
      errors.title = t('validate:emptyTitle')
    }

    if(validator.isEmpty(description)) {
      errors.description = t('validate:emptyDescription')
    }

    if(validator.isEmpty(body)) {
      errors.body = t('validate:emptyBody')
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
    const { history, match, t } = this.props
    const { slug, title, description, body, tag } = this.state
    const tagList = tag.length ? tag.split(',').map(v => v.trim()) : []

    e.preventDefault()

    if(!this.validate()) {
      return
    }

    this.setState(
      produce(draft => {
        draft.sending = true
        draft.errors = {}
      })
    )

    const method = match.params.slug ? 'update' : 'create'

    API.Articles[method]({
      article: {
        slug,
        title,
        description,
        body,
        tagList
      }
    }).then(res => {
      // console.log(res)

      this.setState(
        produce(draft => {
          draft.sending = false
        })
      )

      history.push(`/article/${res.data.article.slug}`)
    }).catch(res => {
      // console.log(res.response.data)

      this.props.alert.error(t('errorWrite'))

      this.setState(
        produce(draft => {
          draft.sending = false
        })
      )
    })
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
    const { history, t } = this.props
    const { loading, sending, errors, slug, title, description, body, tag } = this.state

    return loading ?
      <div></div>
      :
      (
        <Page className="container">
          <Helmet>
            <title>{ slug ? t('headingModify') : t('headingWrite') } - {t('common:siteName')}</title>
          </Helmet>
          <div className="common-form">
            <h2 className="form-title">{ slug ? t('headingModify') : t('headingWrite') }</h2>
            <form onSubmit={this.submitHandle}>
              <fieldset>
                <div className="form-row">
                  <label>
                    <span className="form-head">
                      {t('title')}
                    </span>
                    <input type="text" placeholder={t('title')} className="txt large block" disabled={sending} value={title} onChange={this.changeInput('title')} />
                  </label>
                  { errors.title && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.title}</p> }
                </div>
                <div className="form-row">
                  <label>
                    <span className="form-head">
                      {t('description')}
                    </span>
                    <input type="text" placeholder={t('description')} className="txt large block" disabled={sending} value={description} onChange={this.changeInput('description')} />
                  </label>
                  { errors.description && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.description}</p> }
                </div>
                <div className="form-row">
                  <label>
                    <span className="form-head">
                      {t('body')}
                    </span>
                    <textarea cols="60" rows="10" placeholder={t('body')} className="txt large block" disabled={sending} value={body} onChange={this.changeInput('body')}></textarea>
                  </label>
                  { errors.body && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.body}</p> }
                </div>
                <div className="form-row">
                  <label>
                    <span className="form-head">
                      {t('tag')}
                    </span>
                    <input type="text" placeholder={t('tag')} className="txt large block" disabled={sending} value={tag} onChange={this.changeInput('tag')} />
                  </label>
                </div>
                { sending && <div>{t('sending')}</div> }

                <div className="form-action">
                  <button type="submit" className="btn large primary" disabled={sending}>{t('common:write')}</button>{' '}
                  <button type="button" className="btn large" disabled={sending} onClick={history.goBack}>{t('common:cancel')}</button>
                </div>
              </fieldset>
            </form>
          </div>
        </Page>
      )
  }
}

export default compose(
  withAlert,
  withNamespaces('form'),
)(Form)