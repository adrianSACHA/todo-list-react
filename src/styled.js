import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
display: flex;
flex-direction: column;
flex-basis: 100%;
`;

export const UnorderedList = styled.ul`
list-style: none;
display: flex;
justify-content: center;
background-color: ${({theme}) => theme.color.teal};

margin: 0px;
padding: 10px;
`;

export const List = styled.li`
padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
font-size: x-large;
color: ${({theme}) => theme.color.white};


  &.active {
    color: ${({theme}) => theme.color.silver};;
  }
`;
