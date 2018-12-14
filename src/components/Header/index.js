import React, { Component } from 'react'
import produce from "immer"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import CommonHeader from './style'

class Header extends Component {
  state = {
    menu: false
  }

  toggleMenu = () => {
    this.setState(
      produce(draft => {
        draft.menu = !draft.menu
      })
    )
  }

  menuClose = () => {
    if(this.state.menu) {
      this.setState(
        produce(draft => {
          draft.menu = false
        })
      )
    }
  }

  render() {
    const { user, userInfo, t } = this.props
    const { menu } = this.state

    return (
      <>
        <CommonHeader className={menu ? 'is-opened' : ''} onClick={this.menuClose}>
          <div className="wrap">
            <h1 className="logo"><Link to="/"><i className="fas fa-globe"></i> World</Link></h1>
            <div className="btn-wrap">
              <button type="button" className="btn-menu" onClick={this.toggleMenu}><i className="fas fa-bars"></i> <span>{t('menu')}</span></button>
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
                    <Link to="/Logout">{t('logout')}</Link>
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
        <div className="dim" onClick={this.menuClose}></div>
      </>
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
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('header'),
)(Header)
