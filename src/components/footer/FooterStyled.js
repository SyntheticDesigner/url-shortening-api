import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";

export const FooterWrapper = styled.footer`
  background-color: var(--bg-footer);
  padding: 100px 0px;
  .content {
    max-width: 1300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
  ul {
    list-style: none;
    @media (max-width: 900px) {
      margin-bottom: 32px;
    }
  }
  h1 {
    color: white;
    font-size: 1em;
    margin-bottom: 12px;
  }
  a {
    display: inline-block;
    color: var(--font-color-secondary);
    text-decoration: none;
    margin: 4px 0px;
    transition: color 0.3s;
    &:hover {
      color: var(--brand-primary);
    }
  }
  .social-icons {
    display: flex;
    gap: 16px;
    a {
      color: white;
      transition: color 0.3s;
      &:hover {
        color: var(--brand-primary);
      }
      svg {
        height: 32px;
        width: 32px;
      }
    }
    @media(max-width: 900px){
      margin-top: 32px;
    }
  }
`;

export const StyledLogo = styled(Logo)`
  fill: white;
  margin-right: 12%;
  @media(max-width: 900px){
    margin: 0;
    margin-bottom: 64px;
  }
`;
