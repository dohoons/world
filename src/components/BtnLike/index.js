import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import API from '~/api'
import goLogin from '~/util/goLogin'

import Button from './style'

const BtnLike = props => {
  const { t, user, slug } = props
  const [ loading, setLoading ] = useState(false)
  const [ req, setReq ] = useState(null)
  const [ favorited, setFavorited ] = useState(props.favorited)
  const [ favoritesCount, setCount ] = useState(props.favoritesCount)

  useEffect(() => {
    return () => {
      if(req) req.cancel()
    }
  })

  const like = async () => {
    if(!user) {
      goLogin(props)
      return
    }

    try {
      const req = API.CancelToken.source()
      setReq(req)
      setLoading(true)

      const { data } = await API.Articles[ favorited ? 'unfavorite' : 'favorite' ]({
        slug: slug,
        config: { cancelToken: req.token },
      })

      setLoading(false)
      setFavorited(data.article.favorited)
      setCount(data.article.favoritesCount)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <Button type="button"
      onClick={like}
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

BtnLike.propTypes = {
  slug: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  favoritesCount: PropTypes.number.isRequired,
}

BtnLike.defaultProps = {
  slug: '',
  favorited: false,
  favoritesCount: 0,
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