import styled from "styled-components";

export const HeroWrapper = styled.section`
  color: var(--font-color-primary);
  padding-top: 97px;
  overflow: hidden;
  @media(min-width: 900px){
    padding: 97px 32px 0px;
  }

  .hero-content {
    max-width: 1300px;
    margin: auto;
    display: flex;
    align-items: center;
    @media (max-width: 900px) {
      flex-direction: column-reverse;
      text-align: center;
    }

    h1 {
      font-size: min(max(6vw, 2.5em), 5em);
      line-height: 1.1em;
      max-width: 90%;
      @media (max-width: 900px) {
        margin: auto;
      }
    }
    p {
      font-size: min(max(3vw, 1.2em), 1.5em);;
      width: 70%;
      margin-top: 8px;
      margin-bottom: 40px;
      color: var(--font-color-secondary);
      @media (max-width: 900px) {
        margin: 16px auto 40px;
        width: 90%;
      }
    }
    img {
      margin-right: -20%;
      @media (max-width: 900px) {
        margin-right: -50%;
        width: 140%;
        margin-bottom: 40px;
      }
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
