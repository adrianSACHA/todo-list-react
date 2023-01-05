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
