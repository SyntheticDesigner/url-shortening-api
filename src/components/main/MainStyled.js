import styled from "styled-components";

export const MainWrapper = styled.section`
  background-color: var(--bg-main);
  margin-top: 180px;
  padding-bottom: 80px;
  @media (min-width: 900px) {
    padding: 0px 32px 80px;
  }
  .main-content {
    margin: auto;
    max-width: 1300px;
  }
`;
