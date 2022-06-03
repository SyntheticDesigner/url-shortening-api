import styled from "styled-components";

export const NavWrap = styled.div`
  padding: 64px 0px;

  .nav-content {
    max-width: 1300px;
    margin: auto;
    display: flex;
    align-items: center;
    .logo {
      margin-right: 64px;
      fill: var(--font-color-primary);
    }
    ul {
      display: flex;
      align-items: center;
      gap: 40px;
      list-style: none;
    }
    a {
      color: var(--font-color-secondary);
      text-decoration: none;
      font-weight: 700;
      font-size: 1.2em;
      transition: color 0.3s;
      &:hover {
        color: var(--font-color-primary);
      }
    }
    .log-in {
      margin-left: auto;
      display: flex;
      align-items: center;
    }
    .login-button {
      border: none;
      /* background-color: var(--brand-primary); */
      color: var(--font-color-secondary);
      background: none;
      font-weight: 700;
      font-size: 1.2em;
      transition: color 0.3s;
      &:hover {
        color: var(--font-color-primary);
      }
    }
    .sign-up-button {
      border: none;
      background-color: var(--brand-primary);
      font-weight: 700;
      color: white;
      padding: 8px 28px;
      border-radius: 32px;
      font-size: 1.2em;
      transition: filter 0.3s;
      &:hover {
        filter: saturate(50%) brightness(120%);
      }
    }
  }
`;
