import React from "react";
import { FooterWrapper } from "./FooterStyled";
import NavList from "./NavList";
import { ReactComponent as Logo } from "../../images/logo.svg";
import SocialIcons from "./SocialIcons";

const navLists = [
  {
    title: "Features",
    links: [
      { name: "Link Shortening", to: "" },
      { name: "Branded Links", to: "" },
      { name: "Analytics", to: "" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", to: "" },
      { name: "Developers", to: "" },
      { name: "Support", to: "" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", to: "" },
      { name: "Our Team", to: "" },
      { name: "Careers", to: "" },
      { name: "Contact", to: "" },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <div className='content'>
        <Logo style={{ fill: "white", marginRight: "12%" }} />
        {navLists.map((list, i) => (
          <NavList key={i} data={list} />
        ))}
        <SocialIcons />
      </div>
    </FooterWrapper>
  );
}
