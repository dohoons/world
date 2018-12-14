import styled from 'styled-components'

export default styled.div`
  margin-top: 30px;

  .pagination {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  li {
    flex-shrink: 0;
    text-align: center;
    font-size: 14px;
    color: #7f8a93;
    background: #ebedee;
    list-style: none;
    transition: all .2s;

    &:not(:first-child) {
      border-left: 1px solid #cfd3d6;
    }

    &:first-child {
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }

    &.active {
      font-weight: 500;
      color: #fff;
      background: #07c;
    }
    
    &:not(.active) {
      &:hover,
      &:focus {
        color: #374047;
        background: #dee1e3;
      }
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-width: 36px;
    height: 36px;
    padding: 0 5px;
    color: inherit;
    text-decoration: none;
  }

  .txt {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 0;
  }

  @media screen and (max-width: 768px) {
    a {
      min-width: 30px;
      height: 30px;
    }
  }
`