import React from 'react'
import { useTranslation } from 'react-i18next'
import CommonFooter from './style'

const Footer = () => {
  const { t, i18n } = useTranslation('footer')

  const changeLanguage = lang => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <CommonFooter>
      <h2 className="hide">{t('heading')}</h2>
      <div className="lang-change">
        <button type="button" className={i18n.language === 'ko' ? 'is-active': ''} onClick={() => changeLanguage('ko')}><i className="fas fa-check"></i> 한국어</button>
        <button type="button" className={i18n.language === 'en' ? 'is-active': ''} onClick={() => changeLanguage('en')}><i className="fas fa-check"></i> English</button>
      </div>
    </CommonFooter>
  )
}

export default Footer
