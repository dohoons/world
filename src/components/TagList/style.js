import styled from 'styled-components'

export default styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: ${props => props.small && '4px' };

  &:empty {
    display: none;
  }

  a {
    display: block;
    height: ${props => props.small ? '16px' : '22px' };
    line-height: ${props => props.small ? '14px' : '20px' };
    margin: 0 4px 4px 0;
    padding: 0 10px;
    font-weight: 300;
    font-size: ${props => props.small ? '11px' : '12px' };
    color: #97a1a7;
    text-decoration: none;
    word-wrap: break-word;
    background: #fff;
    border: 1px solid #cfd3d6;
    border-radius: ${props => props.small ? '8px' : '10px' };
    transition: all .2s;

    &:hover,
    &:focus {
      color: #374047;
      border-color: #97a1a7;
    }

    &.selected {
      color: #07c;
      border-color: #07c;
    }
  }
`