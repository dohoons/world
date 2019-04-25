import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import * as tagsActions from '~/store/modules/tags'

import TagList from '~/components/TagList'

const SideTag = ({ tags, tagsActions, t }) => {
  useEffect(() => {
    tagsActions.fetch()
  }, [tagsActions])

  return (
    <div className="tag-area">
      <h2 className="title">{t('hotTag')}</h2>
      <TagList tags={tags} />
    </div>
  )
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