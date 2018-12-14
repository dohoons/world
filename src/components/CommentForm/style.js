import styled from 'styled-components'

export const LoginMsg = styled.div`
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 20px;
  text-align: center;
  font-size: 16px;
  color: #374047;
  background: #f8f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;

  a {
    color: #07c;
  }
`

export default styled.form`
  box-sizing: border-box;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;

  .comment-txt {
    textarea {
      box-sizing: border-box;
      display: block;
      width: 100%;
      height: 80px;
      padding: 15px;
      font-size: 16px;
      color: #5f6e78;
      border: 0;
      border-radius: 0;
      resize: none;
    }
  }

  .action {
    padding: 10px;
    background: #ebedee;
  }

  @media screen and (max-width: 768px) {
    .comment-txt {
      textarea {
        font-size: 14px;
      }
    }
  }
`