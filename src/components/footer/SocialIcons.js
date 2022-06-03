import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faPinterest,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons() {
  return (
    <ul className='social-icons'>
      <a href='/'>
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a href='/'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href='/'>
        <FontAwesomeIcon icon={faPinterest} />
      </a>
      <a href='/'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </ul>
  );
}
