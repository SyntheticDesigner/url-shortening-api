import React from "react";
import { HeroWrapper } from "./HeroStyled";
import heroImage from "../../images/illustration-working.svg";

export default function HeroSection() {
  return (
    <HeroWrapper>
      <div className='hero-content'>
        <div>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <img src={heroImage} alt='' />
      </div>
    </HeroWrapper>
  );
}
