import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withNamespaces, Trans } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import * as articleActions from 'store/modules/article'
import produce from "immer"
import { withAlert } from 'react-alert'

import Form, { LoginMsg } from './style'

class CommentForm extends Component {
  state = {
    comment: '',
    loading: false
  }

  submitHandle = (e) => {
    const { articleActions, slug, t } = this.props
    const { comment } = this.state

    e.preventDefault()

    if(comment.trim() === '') {
      this.props.alert.show(t('validate:emptyBody'))
      this.refs.comment.focus()
      return
    }

    this.setState(
      produce(draft => {
        draft.loading = true
      })
    )

    articleActions.createComment({
      slug,
      comment: {
        body: comment.trim()
      }
    }).then(data => {
      this.setState(
        produce(draft => {
          draft.loading = false
          draft.comment = ''
        })
      )
    }).catch(e => {
      this.props.alert.error(t('comment.errorWrite'))

      this.setState(
        produce(draft => {
          draft.loading = false
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
    const { user, t } = this.props
    const { loading } = this.state

    if(!user) {
      return <LoginMsg className="login-msg">
        <i className="fas fa-info-circle"></i> <Trans i18nKey="comment.loginMsg">
          댓글을 남기려면 <Link to="/login">로그인</Link>이 필요합니다.
        </Trans>
      </LoginMsg>
    }

    return (
      <Form onSubmit={this.submitHandle}>
        <div className="comment-txt">
          <textarea
            ref="comment"
            rows="10"
            cols="40"
            placeholder={t('comment.placeHolder')}
            value={this.state.comment}
            onChange={this.changeInput('comment')}
            disabled={loading}
          ></textarea>
        </div>
        <div className="action">
          <button type="submit" className="btn light">{t('comment.submit')}</button>
        </div>
      </Form>
    )
  }
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