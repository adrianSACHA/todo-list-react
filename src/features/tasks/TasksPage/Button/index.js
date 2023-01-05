import styled from "styled-components";

export const Button = styled.button`
color: ${({ theme }) => theme.color.teal};
border: none;
transition: 0.3s;
background: transparent;
cursor: pointer;

&:hover {
  color: ${({ theme }) => theme.color.bondiBlue};
}
&:active {
  color: ${({ theme }) => theme.color.cyan};
}

&:disabled {
  color: ${({ theme }) => theme.color.silver};
  cursor: not-allowed;
}
`;
