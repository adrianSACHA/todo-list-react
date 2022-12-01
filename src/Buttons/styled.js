import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;
`;

export const Button = styled.button`
  color: hsl(180, 100%, 25%);
  border: none;
  transition: 0.3s;
  background: transparent;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
  }

  &:hover {
    color: hsl(180, 100%, 35%);
  }
  &:active {
    color: hsl(180, 100%, 55%);
  }

  &:disabled {
    color: rgb(204, 204, 204);
  }
`;
