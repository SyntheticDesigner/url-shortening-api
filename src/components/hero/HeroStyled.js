import styled from "styled-components";

export const HeroWrapper = styled.section`
  color: var(--font-color-primary);
  .hero-content {
    max-width: 1300px;
    margin: auto;
    display: flex;
    align-items: center;

    h1 {
      font-size: min(max(6vw, 2em), 5em);
      line-height: 1.1em;
    }
    p {
      font-size: 1.5em;
      width: 70%;
      margin-top: 8px;
      margin-bottom: 40px;
      color: var(--font-color-secondary);
    }
    img {
      margin-right: -20%;
    }
    button {
      padding: 16px 48px;
      font-size: 1.5em;
      border-radius: 32px;
      border: none;
      background-color: var(--brand-primary);
      color: white;
      font-weight: 700;
      transition: filter 0.3s;
      &:hover {
        filter: saturate(50%) brightness(120%);
      }
    }
  }
`;
