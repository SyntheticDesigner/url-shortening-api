import React from "react";
import AboutCard from "./AboutCard";
import brandRecog from "../../../images/icon-brand-recognition.svg";
import detailRec from "../../../images/icon-detailed-records.svg";
import fullyCustom from "../../../images/icon-fully-customizable.svg";
import { AboutWrapper } from "./InformationStyled";

const data = [
  {
    img: brandRecog,
    title: "Brand Recognition",
    info: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    img: detailRec,
    title: "Detailed Records",
    info: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    img: fullyCustom,
    title: "Fully Customizable",
    info: "Improve brand awareness and content disocverability through customizable links, supercharging audience engagement.",
  },
];

export default function AboutOurProduct() {
  return (
    <AboutWrapper>
      {data.map((card, i) => (
        <AboutCard data={card} index={i} key={i} />
      ))}
    </AboutWrapper>
  );
}
