import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: var(--bg-footer);
  padding: 100px 0px;
  .content {
    max-width: 1300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  ul {
    list-style: none;
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
    a {
      color: white;
      margin-left: 16px;
      transition: color 0.3s;
      &:hover {
        color: var(--brand-primary);
      }
      svg {
        height: 32px;
        width: 32px;
      }
    }
  }
`;
