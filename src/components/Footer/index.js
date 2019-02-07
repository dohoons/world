import React from 'react'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import CommonFooter from './style'

const Footer = ({ t, lng, i18n }) => {
  const changeLanguage = lang => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <CommonFooter>
      <h2 className="hide">{t('heading')}</h2>
      <div className="lang-change">
        <button className={lng === 'ko' ? 'is-active': ''} onClick={() => changeLanguage('ko')}><i className="fas fa-check"></i> 한국어</button>
        <button className={lng === 'en' ? 'is-active': ''} onClick={() => changeLanguage('en')}><i className="fas fa-check"></i> English</button>
      </div>
    </CommonFooter>
  )
}

export default compose(
  withNamespaces('footer'),
)(Footer)
