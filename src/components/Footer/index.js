import React, { Component } from 'react'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import CommonFooter from './style'

class Header extends Component {
  changeLanguage = lang => {
    const { i18n } = this.props
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }
  render() {
    const { t, lng } = this.props

    return (
      <CommonFooter>
        <h2 className="hide">{t('heading')}</h2>
        <div className="lang-change">
          <button className={lng === 'ko' ? 'is-active': ''} onClick={() => this.changeLanguage('ko')}><i className="fas fa-check"></i> 한국어</button>
          <button className={lng === 'en' ? 'is-active': ''} onClick={() => this.changeLanguage('en')}><i className="fas fa-check"></i> English</button>
        </div>
      </CommonFooter>
    )
  }
}

export default compose(
  withNamespaces('footer'),
)(Header)
