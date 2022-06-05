import styled from "styled-components";

export const NavWrap = styled.div`
  padding: 32px 32px;
  background-color: rgba(255, 255, 255, 0.88);
  position: fixed;
  width: 100%;
  z-index: 4;
  .nav-content {
    max-width: 1300px;
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
    .logo {
      /* margin-right: 64px; */
      fill: var(--font-color-primary);
      width: 185px;
    }
    .collapsable {
      display: flex;
      width: 100%;
      transition: all 0.5s;
      @media (max-width: 900px) {
        flex-direction: column;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.88);
        width: 80%;
        height: calc(100vh - 97px);
        right: -32px;
        bottom: 0;
        transform: ${({ openNav }) =>
          openNav ? "translate(0%, calc(100% + 32px))" : "translate(150%, calc(100% + 32px))"};
        opacity: ${({ openNav }) => (openNav ? "1" : "0")};
        padding: 16px;
        align-items: center;
      }
    }
    ul {
      display: flex;
      align-items: center;
      gap: 40px;
      list-style: none;
      @media (max-width: 900px) {
        flex-direction: column;
      }
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
      flex-direction: row;
      @media (max-width: 900px) {
        margin: auto auto 32px;
      }
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
      @media (max-width: 900px) {
        padding: 8px 16px;
      }
    }
    .sandwich {
      margin-left: auto;
      background: none;
      border: none;
      height: 32px;
      width: 32px;
      display: grid;
      place-items: center;
      position: relative;
      @media (min-width: 900px) {
        display: none;
      }
      div {
        padding: 2px;
        width: 100%;
        transition: transform 0.5s;
        background-color: var(--font-color-secondary);
        position: ${({ openNav }) => (openNav ? "absolute" : "relative")};
      }
      .line1 {
        transform: rotate(${({ openNav }) => (openNav ? "45deg" : "0deg")});
      }
      .line2 {
        opacity: ${({ openNav }) => (openNav ? "0" : "1")};
      }
      .line3 {
        transform: rotate(${({ openNav }) => (openNav ? "-45deg" : "0deg")});
      }
    }
  }
`;
