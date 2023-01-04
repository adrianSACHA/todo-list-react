import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.color.teal};
  border: none;
  transition: 0.3s;
  background: transparent;
  margin: 0 14px 0 0;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}px) {
    flex-basis: 100%;
    margin: 0;
  }

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