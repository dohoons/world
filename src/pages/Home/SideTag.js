import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import * as tagsActions from 'store/modules/tags'

import TagList from 'components/TagList'

class SideTag extends Component {
  componentDidMount() {
    this.props.tagsActions.fetch()
  }

  render() {
    const { tags, t } = this.props

    return (
      <div className="tag-area">
        <h2 className="title">{t('hotTag')}</h2>
        <TagList tags={tags} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tags: state.tags.tags
})

const mapDispatchToProps = (dispatch) => ({
  tagsActions: bindActionCreators(tagsActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNamespaces('home'),
)(SideTag)