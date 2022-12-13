import styled from "styled-components";

export const Sections = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  margin: 10px auto;
  padding: 10px 20px;
  box-shadow: 0 0 5px #ddd;
`;

export const List = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}px) {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
`;

export const Header = styled.h2`
  padding: 20px 0px;
  margin: 0;
  font-size: 20px;
`;

export const Content = styled.div`
  padding: 20px;
`;
