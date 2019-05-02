import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from "react-helmet"
import needAuth from '~/util/needAuth'

import TopVisual from './TopVisual'
import SideTag from './SideTag'
import MainList from './MainList'
import TagPage from './TagPage'

import Page from './style'

const Home = () => {
  return (
    <Page>
      <Helmet title={`Home`} />
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

export default hot(Home)