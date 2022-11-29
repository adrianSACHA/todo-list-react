import styled, { css } from "styled-components";

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

  ${({ hidden }) => hidden && css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) => done && css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  transition: 0.3s;

  ${({ toggleDone }) => toggleDone && css`
      background-color: hsl(120, 100%, 25%);
      color: white;
      margin-right: 10px;

      &:hover {
        background-color: hsl(120, 100%, 30%);
      }
    `}

  ${({ remove }) => remove && css`
      background-color: hsl(0, 100%, 50%);
      padding: 0px 3px 0px 4px;
   
      &:hover {
        background-color: hsl(0, 100%, 60%);
      }
   `}
`;
