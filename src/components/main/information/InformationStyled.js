import styled from "styled-components";

export const StatsWrapper = styled.div`
  text-align: center;
  max-width: 580px;
  margin: -20px auto 0px;

  h1 {
    font-size: min(max(2vw, 2em), 3em);
    color: var(--font-color-primary);
    margin-bottom: 16px;
  }
  p {
    font-size: 1.2em;
    color: var(--font-color-secondary);
    @media (max-width: 900px) {
      width: 90%;
      margin: auto;
    }
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 120px auto;
  gap: 64px;
  position: relative;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    width: 80%;
    margin: auto;
    padding: 4px;
    background-color: var(--brand-primary);
    transform: translateY(30px);
    @media (max-width: 900px) {
      flex-direction: column;
      width: 4px;
      height: 80%;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const AboutCardWrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 0px 32px 40px;
  transform: translateY(${({ extraMargin }) => `${extraMargin}px`});
  margin-top: ${({ extraMargin }) => `${extraMargin}px`};
  height: fit-content;
  min-height: 310px;
  display: grid;
  img {
    padding: 20px;
    background-color: var(--bg-brand);
    border-radius: 50%;
    transform: translateY(-50%);
  }
  p {
    margin-top: 20px;
    color: var(--font-color-secondary);
    font-size: 1.1em;
    line-height: 1.5em;
  }
  @media (max-width: 900px) {
    transform: translateY(0);
    max-width: 90%;
    img {
      margin: 0px auto;
    }
  }
`;
