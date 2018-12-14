import styled from 'styled-components'

export default styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 25px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #07c;
  border-radius: 5px;
  cursor: pointer;

  ${props => props.favorited ?
    `
      color: #fff;
      background: #07c;

      i {
        color: #fff;
      }
    ` : `
      color: #07c;
      background: #fff;

      i {
        color: #07c;
      }
    `
  }

  .txt {
    position: absolute;
    left: -9999px;
  }

  .count {
    margin-left: 5px;
  }

  .loading {
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`