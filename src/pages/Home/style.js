import styled from 'styled-components'

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  color: #fff;
  background: #07c;
  box-shadow: inset 0 -7px 17px 0 rgba(0,0,0,.15);
  overflow: hidden;

  &.init {
    .copy {
      letter-spacing: -.04em;
      opacity: 1;
      transition: letter-spacing 4s;
    }
  }

  .copy {
    font-weight: 500;
    font-size: 144px;
    color: #4a9eda;
    white-space: nowrap;
    letter-spacing: .4em;
    opacity: .3;
    position: relative;
    bottom: -26px;
  }

  @supports (-webkit-text-stroke: 1px) {
    .copy {
      color: transparent;
      -webkit-text-stroke: 1px #7db9e5;
    }
  }

  @media screen and (max-width: 768px) {
    height: 100px;

    .copy {
      font-size: 120px;
    }

    .hello {
      position: absolute;
      left: -9999px;
    }
  }
`

export const TagTitle = styled.h2`
  margin-bottom: 25px;
  font-weight: 500;
  font-size: 30px;
  color: #97a1a7;
  letter-spacing: -.04em;

  span {
    margin-left: 5px;
    color: #374047;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 24px;
  }
`

export default styled.div`
  .container {
    display: flex;
  }

  .body {
    flex: 1;
  }

  .side {
    flex-shrink: 0;
    box-sizing: border-box;
    width: 240px;
    margin-left: 20px;
    background: #f8f9f9;
  }

  .tag-area {
    padding: 15px;
    position: sticky;
    top: 0;

    .title {
      margin-bottom: 10px;
      font-weight: 500;
      font-size: 16px;
      color: #7f8a93;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      display: block;
    }

    .side {
      width: auto;
      margin-top: 50px;
      margin-left: 0;
    }
  }
`