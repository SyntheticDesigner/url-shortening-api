import React, { useState } from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { NavWrap } from "./NavStyled";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <NavWrap openNav={openNav}>
      <div className='nav-content'>
        <Logo className='logo' />
        <div className='collapsable'>
          <ul className='main-nav'>
            <li>
              <a href=''>Features</a>
            </li>
            <li>
              <a href=''>Pricing</a>
            </li>
            <li>
              <a href=''>Resources</a>
            </li>
          </ul>
          <ul className='log-in'>
            <li>
              <button className='login-button'>Login</button>
            </li>
            <li>
              <button className='sign-up-button'>Sign Up</button>
            </li>
          </ul>
        </div>
        <button className='sandwich' onClick={() => setOpenNav(!openNav)}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </button>
      </div>
    </NavWrap>
  );
}
