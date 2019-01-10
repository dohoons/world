import styled from 'styled-components'
import AuthorInfo from '~/components/AuthorInfo/style'
import TagList from '~/components/TagList/style'
import BtnLike from '~/components/BtnLike/style'

export const Total = styled.p`
  margin-bottom: 10px;
`

export const Loading = styled.div`
  > div {
    padding: 22px 20px 17px;
    border-top: 1px solid #ddd;
  }
`

export default styled.ul`
  padding: 0;
  border-bottom: 1px solid #ddd;

  .article-item {
    list-style: none;
    padding: 22px 0 17px 20px;
    border-top: 1px solid #ddd;
    position: relative;
  }

  .title {
    padding-right: 60px;
    line-height: 1.3;
    font-weight: 500;
    font-size: 22px;
    color: #07c;
    word-wrap: break-word;

    a {
      color: inherit;
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  .desc {
    margin-top: 4px;
    word-wrap: break-word;
    font-size: 14px;
    color: #374047;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 15px;
  }

  ${TagList} {
    justify-content: flex-end;
    margin-left: 10px;
    margin-right: -4px;
  }

  ${AuthorInfo} {
    flex-shrink: 0;
  }

  ${BtnLike} {
    position: absolute;
    top: 23px;
    right: 0;
  }

  @media screen and (max-width: 768px) {
    .article-item {
      padding: 15px 0 12px 0;
    }

    .title {
      font-size: 18px;
    }

    .desc {
      font-size: 13px;
    }

    .info {
      display: block;
      margin-top: 15px;
    }

    ${TagList} {
      justify-content: flex-start;
      margin-top: 10px;
      margin-left: 0;
      margin-right: 0;
    }

    ${BtnLike} {
      top: 17px;
    }
  }
`