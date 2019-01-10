import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import compose from 'lodash-es/flowRight'
import * as articleListActions from '~/store/modules/articleList'

import ReactPlaceholder from 'react-placeholder'
import AuthorInfo from '~/components/AuthorInfo'
import BtnLike from '~/components/BtnLike'
import Pagination from "~/components/Pagination"
import TagList from "~/components/TagList"
import Articles, { Total, Loading } from './style'

const ListPlaceHolder = () => (
  <Loading>
    {
      [...Array(5).keys()].map(v => (
        <ReactPlaceholder key={v} showLoadingAnimation={true} type='media' ready={false} rows={4} color='#E0E0E0'><div></div></ReactPlaceholder>
      ))
    }
  </Loading>
)

class ArticleList extends Component {
  static defaultProps = {
    page: 1,
    countPerPage: 10
  }

  componentDidMount() {
    this.fetch(parseInt(this.props.page))
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.page !== this.props.page ||
      prevProps.filter !== this.props.filter || 
      prevProps.tag !== this.props.tag
    ) {
      this.fetch(parseInt(this.props.page))
    }
  }

  componentWillUnmount() {
    this.props.articleListActions.reset()
  }

  fetch = (page = 1) => {
    const { articleListActions, username, filter, tag } = this.props
    
    articleListActions.fetch({
      filter,
      param: { username, page: page - 1, tag },
    })
  }

  render() {
    const {
      useTotal,
      page,
      countPerPage,
      handlePageChange,
      getPageUrl,
      loading,
      articles,
      articlesCount,
      tag,
    } = this.props

    const pageTotal = Math.ceil(articlesCount / countPerPage)

    return (
      <>
        { useTotal && <Total>{page} / {pageTotal}</Total> }
        <ReactPlaceholder ready={!loading} customPlaceholder={<ListPlaceHolder />}>
          <Articles>
            {
              articles.map((v, i) => (
                  <li key={v.slug} className="article-item">
                    <p className="title"><Link to={`/article/${v.slug}`}>{v.title}</Link></p>
                    <p className="desc">{v.description}</p>
                    <div className="info">
                      <AuthorInfo
                        image={v.author.image}
                        username={v.author.username}
                        createdAt={v.createdAt}
                      />
                      <TagList tags={v.tagList} currentTag={tag} small />
                    </div>
                    <BtnLike
                      slug={v.slug}
                      favorited={v.favorited}
                      favoritesCount={v.favoritesCount}
                    />
                  </li>
              ))
            }
          </Articles>
        </ReactPlaceholder>

        <Pagination
          page={parseInt(page)}
          total={articlesCount}
          onChange={handlePageChange}
          countPerPage={countPerPage}
          getPageUrl={getPageUrl}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.articleList.loading,
  articles: state.articleList.articles,
  articlesCount: state.articleList.articlesCount,
})

const mapDispatchToProps = (dispatch) => ({
  articleListActions: bindActionCreators(articleListActions, dispatch)
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ArticleList)