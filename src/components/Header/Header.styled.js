import styled from 'styled-components';

export const Header = styled.header`
  background-color: #CC0066;
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
`

export const NavList = styled.div`
  color: #FFF;
  display: flex;
  align-items: center;
`

export const Link = styled.a`
  background: transparent;
  text-decoration: none;
  color: #FFF;
  margin: 0px 10px;
  &:hover{
    font-weight: 700;
    font-size: medium;
    text-decoration: underline;
  }
`
export const IconButton = styled.button`
  background: transparent;
  text-decoration: none;
  border: none;
  filter: invert(1);
  
  &:hover{
    filter: invert(0.6);
  }
`
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  input, textarea{
    border: solid 1px #E5E5E5; 
    border-radius: 4px;
    outline: 0;
    height: 1.7em;
    width: 12em;
  }
`