import styled from 'styled-components'

export default styled.ul`
  li {
    position: relative;

    &:not(:first-child) {
      margin-top: 20px;
    }

    &:not(.no-item) {
      display: flex;
    }
  }

  .no-item {
    padding: 40px 0;
    text-align: center;
    font-size: 16px;
    color: #7f8a93;
  }

  .img {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    margin-right: 15px;
    border-radius: 16px;
    position: relative;
    top: 35px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }

  .wrap {
    width: calc(100% - 39px);
  }

  .info {
    height: 25px;
    padding-left: 10px;
    position: relative;
  }

  .name {
    font-size: 13px;
    color: #374047;
  }

  .date {
    margin-left: 10px;
    font-size: 11px;
    color: inherit;
    opacity: .6;
  }

  .del {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    color: #7f8a93;
    background: transparent;
    border: 0;
    position: absolute;
    right: 6px;
    bottom: 6px;
    z-index: 1;
  }

  .content {
    padding: 10px 50px 10px 10px;
    font-size: 16px;
    color: #5f6e78;
    word-wrap: break-word;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 21px;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-right-color: #ddd;
      border-left: 0;
      margin-top: -8px;
      margin-left: -8px;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 21px;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-right-color: #fff;
      border-left: 0;
      margin-top: -8px;
      margin-left: -7px;
    }
  }

  @media screen and (max-width: 768px) {
    .del {
      top: -5px;
      right: 0;
      bottom: auto;
    }

    .content {
      padding-right: 10px;
      font-size: 14px;
    }
  }
`