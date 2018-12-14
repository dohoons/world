import styled from 'styled-components'

export default styled.footer`
  padding: 40px 0;
  text-align: center;
  border-top: 1px solid #dee1e3;

  .lang-change {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      height: 20px;
      padding: 0 20px;
      color: #7f8a93;
      align-items: center;

      i {
        display: none;
        color: #07c;
      }
      
      &:not(:first-child) {
        border-left: 1px solid #dee1e3;
      }

      &.is-active {
        font-weight: 500;
        color: #374047;

        i {
          display: block;
          margin-right: 5px;
        }
      }
    }
  }
`