import React from "react";
import {ReactComponent as Logo} from "../../images/logo.svg";
import { NavWrap } from "./NavStyled";

export default function NavBar() {
  return (
    <NavWrap>
      <div className='nav-content'>
        <Logo className="logo"/>
        <ul>
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
            <button className="login-button">Login</button>
          </li>
          <li>
            <button className="sign-up-button">Sign Up</button>
          </li>
        </ul>
      </div>
    </NavWrap>
  );
}
