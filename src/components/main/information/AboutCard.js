import React from "react";
import { AboutCardWrapper } from "./InformationStyled";

export default function AboutCard({ data, index }) {
  return (
    <AboutCardWrapper extraMargin={index * 30}>
      <img src={data.img} alt='' />
      <h1>{data.title}</h1>
      <p>{data.info}</p>
    </AboutCardWrapper>
  );
}
