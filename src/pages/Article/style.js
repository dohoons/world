import styled from 'styled-components'
import TagStyle from '~/components/TagList/style'

export const ArticleHeader = styled.div`
  color: #fff;
  background: #97a1a7;

  .wrap {
    box-sizing: border-box;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 5% 10px;
  }

  .subject {
    line-height: 1.3;
    font-weight: 500;
    font-size: 32px;
    word-wrap: break-word;
  }

  .desc {
    font-size: 16px;
    word-wrap: break-word;
  }

  .info {
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #bec4c8;

    > div {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .wrap {
      padding: 20px 5% 20px;
    }

    .subject {
      font-size: 24px;
    }

    .desc {
      font-size: 14px;
    }
  }
`

export const ArticleBody = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #dee1e3;

  > .body {
    min-height: 150px;
    line-height: 1.8;
    font-size: 16px;
    color: #374047;
    word-wrap: break-word;

    p, ul, dl {
      &:not(:first-child) { margin: 20px 0 10px; }
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 500;
    }
  }

  ${TagStyle} {
    margin-top: 30px;
  }

  @media screen and (max-width: 768px) {
    > .body {
      font-size: 14px;

      p, ul, dl {
        &:not(:first-child) { margin: 12px 0 6px; }
      }
    }
  }
`

export default styled.div`
  .comment-title {
    margin-top: 30px;
    margin-bottom: 10px;
    padding: 0 5px;
    font-weight: 500;
    font-size: 20px;
    color: #374047;
  }
`