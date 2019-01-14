import styled from 'styled-components'

export default styled.header`
  /* justify-content: space-between; */
  background: #fff;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,.05);
  position: relative;
  z-index: 300;

  .wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    max-width: 1200px;
    margin: 0 auto;
    padding: 12px 5%;
  }

  .logo {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 24px;
    color: #07c;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .nav {
    display: flex;
    margin: 0 0 0 auto;
    padding: 0;
    position: relative;
    z-index: 1;

    li {
      flex-shrink: 0;
      list-style: none;
    }

    a {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 35px;
      padding: 0 10px;
      text-decoration: none;
      font-weight: 400;
      font-size: 15px;
      color: #7f8a93;
      border-radius: 4px;
      transition: all .2s;

      &:hover,
      &:focus {
        color: #374047;
        background: #ebedee;
      }
    }

    i {
      margin-right: 4px;
    }

    .home {
      color: #374047;
    }

    .logout {
      i {
        font-size: 17px;
      }
      .txt {
        position: absolute;
        left: -9999px;
      }
    }
  }

  .btn-wrap {
    width: 46px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
  }
  
  .btn-menu {
    box-sizing: border-box;
    display: block;
    width: 46px;
    height: 46px;
    padding: 0;
    color: #374047;
    background: transparent;
    border: 0;
    position: absolute;
    top: 0;
    right: -46px;
    cursor: pointer;

    i {
      font-size: 18px;
    }

    span {
      position: absolute;
      left: -9999px;
    }
  }

  & + .dim {
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    opacity: 0;
    position: fixed;
    top: 0;
    left: -100%;
    z-index: 200;
  }

  @media screen and (max-width: 768px) {
    .wrap {
      height: 46px;
      padding: 8px 15px;
    }

    .logo {
      font-size: 16px;
    }

    .nav {
      margin-right: -5px;

      a {
        height: 30px;
        padding: 0 5px;
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .btn-menu {
      right: 0;
      transition: all .4s;
    }

    .nav {
      display: none;
      flex-direction: column;
      background: #fff;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
      position: absolute;
      top: 46px;
      right: 0;
      z-index: 201;

      li {
        &:not(:first-child) {
          border-top: 1px solid #ebedee;
        }
      }

      a {
        min-width: 150px;
        height: 40px;
        padding: 0 20px;
        color: #374047;
        border-radius: 0;
      }
    }

    &.is-opened {
      .btn-menu {
        color: #07c;
      }

      .nav {
        display: flex;
      }

      & + .dim {
        opacity: 1;
        left: 0;
        transition: opacity .6s;
      }
    }
  }
`