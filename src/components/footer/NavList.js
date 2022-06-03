import React from "react";

export default function NavList({ data }) {
  return (
    <ul className='navList'>
      <h1>{data.title}</h1>
      {data.links.map((link, i) => (
        <li key={i}>
          <a href={link.to}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}
