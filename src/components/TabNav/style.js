import styled from 'styled-components'

export default styled.ul`
  display: flex;
  margin-bottom: 20px;
  padding: 0;
  position: relative;

  &:before {
    content: '';
    display: block;
    height: 1px;
    background: #004d84;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  li {
    list-style: none;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &.selected a {
      font-weight: 500;
      color: #00365d;
      border: 1px solid #004d84;
      border-bottom: 1px solid #fff;
      position: relative;
    }
  }

  a {
    box-sizing: border-box;
    display: block;
    min-width: 110px;
    padding: 10px 20px;
    text-align: center;
    color: #97a1a7;
    text-decoration: none;
    border: 1px solid #bec4c8;
    border-bottom: 1px solid #004d84;
  }

  .sub {
    font-size: .7em;
  }

  @media screen and (max-width: 768px) {
    a {
      padding: 8px 15px;
    }
  }
`