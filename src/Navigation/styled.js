import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  margin: 0 auto;
  position: sticky;
  top: 0;
`;

export const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.teal};
  margin: 0;
  padding: 10px;
  gap: 15px;
`;

export const List = styled.li`
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: large;
  color: ${({ theme }) => theme.color.white};
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    color: ${({ theme }) => theme.color.bondiBlue};

  }

  &.active {
    font-weight: bold;
  }
`;
