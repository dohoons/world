import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import API from 'api'
import produce from "immer"
import goLogin from 'util/goLogin'

import Button from './style'

class BtnLike extends Component {
	static propTypes = {
		slug: PropTypes.string.isRequired,
		favorited: PropTypes.bool.isRequired,
		favoritesCount: PropTypes.number.isRequired,
	}

	static defaultProps = {
    loading: false,
    slug: '',
    favorited: false,
    favoritesCount: 0,
	}

  constructor(props) {
    super(props)
    this.state = {
      slug: props.slug,
      favorited: props.favorited,
      favoritesCount: props.favoritesCount,
    }
  }

  componentWillUnmount() {
    if(this.req) this.req.cancel()
  }

  like = async () => {
    const { slug, favorited } = this.state

    if(!this.props.user) {
      goLogin(this.props)
      return
    }

    try {

      this.setState(
        produce(draft => {
          draft.loading = true
        })
      )

      this.req = API.CancelToken.source()
      const { data } = await API.Articles[ favorited ? 'unfavorite' : 'favorite' ]({
        slug: slug,
        config: { cancelToken: this.req.token },
      })

      this.setState(
        produce(draft => {
          draft.loading = false
          draft.favorited = data.article.favorited
          draft.favoritesCount = data.article.favoritesCount
        })
      )
    } catch(e) {
      console.log(e)
    }
  }

  render() {
    const { t } = this.props
    const { loading, favorited, favoritesCount } = this.state

    return (
      <Button type="button"
        onClick={this.like}
        favorited={favorited}
      >
        {
          loading ?
          <i className="fas fa-spinner loading"></i> :
          <>
            <i className="fas fa-heart"></i>
            <span className="txt">{t('like.actionText')}</span>{' '}
            <span className="count">{favoritesCount}</span>
          </>
        }
      </Button>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  userInfo: state.auth.userInfo,
})

const mapDispatchToProps = (dispatch) => ({
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('components'),
)(BtnLike)