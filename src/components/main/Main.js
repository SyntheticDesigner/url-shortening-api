import React from "react";
import AboutOurProduct from "./information/AboutOurProduct";
import AdvancedStats from "./information/AdvancedStats";
import { MainWrapper } from "./MainStyled";
import ShortenLink from "./shortenLinks/ShortenLink";

export default function Main() {
  return (
    <MainWrapper>
      <div className='main-content'>
        <ShortenLink />
        <AdvancedStats />
        <AboutOurProduct />
      </div>
    </MainWrapper>
  );
}
