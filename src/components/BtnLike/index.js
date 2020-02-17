import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import API from '~/api'
import goLogin from '~/util/goLogin'

import Button from './style'

const BtnLike = props => {
  const { slug } = props
  const history = useHistory()
  const { t } = useTranslation('components')
  const { user } = useSelector(state => state.auth)
  const [ loading, setLoading ] = useState(false)
  const [ req, setReq ] = useState(null)
  const [ favorited, setFavorited ] = useState(props.favorited)
  const [ favoritesCount, setCount ] = useState(props.favoritesCount)

  useEffect(() => {
    return () => {
      if(req) req.cancel()
    }
  }, [req])

  const like = async () => {
    if(!user) {
      goLogin(history)
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

export default BtnLike