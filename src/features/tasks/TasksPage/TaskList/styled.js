import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 10px;
  padding: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

const Button = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  transition: 0.3s;
`;

export const ToggleDoneButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.japaneseLaurel};
  color: ${({ theme }) => theme.color.white};
  margin-right: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.color.japaneseLaurelLight};
  }
`;

export const RemoveButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.red};
  padding: 0px 3px 0px 4px;

  &:hover {
    background-color: ${({ theme }) => theme.color.redOrange};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.teal};
  text-decoration: none;

  &:hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.color.blueLagoon};
    text-decoration: none;
  }
`;
