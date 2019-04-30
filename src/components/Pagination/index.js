import React from 'react'
import { useTranslation } from 'react-i18next'
import Pagination from "react-js-pagination"
import PagingWrap from './style'

const Paging = ({
  page = 1,
  total = 1,
  onChange = () => {},
  getPageUrl = () => {},
  countPerPage = 10,
  pageLen = 5,
}) => {
  const { t } = useTranslation('components')

  return (
    <PagingWrap>
      <Pagination
        activePage={page}
        totalItemsCount={total}
        onChange={onChange}
    
        itemsCountPerPage={countPerPage}
        pageRangeDisplayed={pageLen}

        getPageUrl={getPageUrl}

        innerClass="pagination"
        activeLinkClass="active"
    
        firstPageText={<span className="fas fa-angle-double-left"><span className="txt">{t('pagination.first')}</span></span>}
        prevPageText={<span className="fas fa-angle-left"><span className="txt">{t('pagination.prev')}</span></span>}
        nextPageText={<span className="fas fa-angle-right"><span className="txt">{t('pagination.next')}</span></span>}
        lastPageText={<span className="fas fa-angle-double-right"><span className="txt">{t('pagination.last')}</span></span>}
      />
    </PagingWrap>
  )
}

export default React.memo(Paging)