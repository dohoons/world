import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"
import needAuth from 'util/needAuth'

import TopVisual from './TopVisual'
import SideTag from './SideTag'
import MainList from './MainList'
import TagPage from './TagPage'

import Page from './style'

class Home extends Component {
  render() {
    const { t } = this.props

    return (
      <Page>
        <Helmet>
          <title>Home - {t('common:siteName')}</title>
        </Helmet>
        <TopVisual />
        <div className="container">
          <div className="body">
            <Switch>
              <Route path="/articles/:page?" component={MainList} />
              <Route path="/feed/:page?" component={needAuth(MainList)} />
              <Route path="/tag/:tag/:page?" component={TagPage} />
              <Route component={MainList} />
            </Switch>
          </div>
          <div className="side">
            <SideTag />
          </div>
        </div>
      </Page>
    )
  }
}

export default compose(
  withNamespaces('home'),
)(Home)