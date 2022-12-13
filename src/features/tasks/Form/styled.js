import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}px) {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: none;
  transition: 1s;

  &:hover {
    background-color: ${({ theme }) => theme.color.persianGreen};
    transform: scale(1.1);
  }

  &:active {
    background-color: ${({ theme }) => theme.color.bondiBlue};
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
`;
