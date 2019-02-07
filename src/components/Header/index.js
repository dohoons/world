import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import * as authActions from '~/store/modules/auth'
import CommonHeader from './style'

const Header = ({ user, userInfo, authActions, t }) => {
  const [ menuOpened, setMenu ] = useState(false)
  const toggleMenu = () => setMenu(!menuOpened)
  const menuClose = () => setMenu(false)

  const logout = e => {
    authActions.logout()
    e.preventDefault()
  }

  return (
    <>
      <CommonHeader className={menuOpened ? 'is-opened' : ''} onClick={menuClose}>
        <div className="wrap">
          <h1 className="logo"><Link to="/"><i className="fas fa-globe"></i> World</Link></h1>
          <div className="btn-wrap">
            <button type="button" className="btn-menu" onClick={toggleMenu}><i className="fas fa-bars"></i> <span>{t('menu')}</span></button>
          </div>
          <ul className="nav">
            <li>
              <Link to="/" className="home">{t('home')}</Link>
            </li>
            {
              user ?
              <>
                <li>
                  <Link to="/form"><i className="far fa-edit"></i> {t('write')}</Link>
                </li>
                <li>
                  <Link to={`/@${userInfo.username}`}><i className="far fa-user"></i> {t('profile')}</Link>
                </li>
                <li>
                  <Link to=" " onClick={logout}>{t('logout')}</Link>
                </li>
              </>
              :
              <>
                <li>
                  <Link to="/login">{t('login')}</Link>
                </li>
                <li>
                  <Link to="/join">{t('join')}</Link>
                </li>
              </>
            }
          </ul>
        </div>
      </CommonHeader>
      <div className="dim" onClick={menuClose}></div>
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  userInfo: state.auth.userInfo,
})

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('header'),
)(Header)
