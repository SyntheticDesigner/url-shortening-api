import React from "react";
import styled from "styled-components";
import bgDesktop from "../images/bg-boost-desktop.svg";
import bgMobile from "../images/bg-boost-mobile.svg";

const CTAWrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 40px;
  padding: 60px 0px;
  background-color: var(--bg-brand);
  background-image: url(${bgDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  h1 {
    font-size: min(max(5vw, 1.7em), 2.5em);
  }
  button {
    color: white;
    background-color: var(--brand-primary);
    font-size: 1.4em;
    border: none;
    padding: 12px 40px;
    border-radius: 32px;
    transition: filter 0.3s;
    &:hover {
      filter: saturate(50%) brightness(120%);
    }
  }
`;

export default function CTA() {
  return (
    <CTAWrapper>
      <h1>Boost your links today</h1>
      <button>Get Started</button>
    </CTAWrapper>
  );
}
