import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.teal};
  border: none;
  transition: 0.3s;
  background: transparent;

  &:hover {
    color: ${({ theme }) => theme.color.bondiBlue};
  }
  &:active {
    color: ${({ theme }) => theme.color.cyan};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }
`;
