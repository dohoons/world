import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: center;

  .link {
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover,
    &:focus {
      .name {
        text-decoration: underline;
      }
    }
  }

  p {
    margin: 0;
  }

  .img {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    border-radius: 16px;
    overflow: hidden;
    background: url('${process.env.PUBLIC_URL}/assets/profile-dummy.jpg') no-repeat 0 0 / 100%;

    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }

  .con {
    flex: 1;
  }

  .name {
    margin-left: 10px;
    font-size: 13px;
  }

  .date {
    margin-left: 10px;
    font-size: 11px;
    color: inherit;
    opacity: .6;
  }
`