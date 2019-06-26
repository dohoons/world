import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 30px;
  background: #ebedee;

  p {
    margin: 0;
  }

  .img {
    width: 110px;
    height: 110px;
    margin-bottom: 10px;
    border-radius: 55px;
    background: url('${process.env.PUBLIC_URL}/assets/profile-dummy.jpg') no-repeat 0 0 / 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }

  .username {
    margin: 0;
    font-weight: 500;
    font-size: 26px;
    color: #222;

    a {
      color: inherit;
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  .bio {
    margin-top: 10px;
    font-size: 14px;
    color: #999;
  }

  .action {
    width: 100%;
    margin-top: 20px;
    padding-top: 20px;
    text-align: center;
    border-top: 1px solid #ccc;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 15px 20px;

    .img {
      width: 90px;
      height: 90px;
      border-radius: 45px;
    }

    .username {
      font-size: 20px;
    }

    .bio {
      font-size: 13px;
    }
  }
`