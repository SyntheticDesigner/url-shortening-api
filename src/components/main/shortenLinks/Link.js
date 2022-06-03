import React, { useState, useEffect } from "react";
import { LinkWrapper } from "./ShortenLinkStyled";

export default function Link({ urlData, copied, setCopied }) {
  useEffect(() => {
    // navigator.clipboard.readText().then((text) => {
    //     console.log("Pasted content: ", text);
    //   })
    //   .catch((err) => {
    //     console.error("Failed to read clipboard contents: ", err);
    //   });
  });
  function copyText() {
    navigator.clipboard.writeText(urlData.short_url);
    setCopied(urlData.short_url);
  }
  return (
    <LinkWrapper copied={copied === urlData.short_url}>
      <a href={urlData.long_url} className='long-url'>
        {urlData.long_url}
      </a>
      <a href={urlData.short_url} className='short-url'>
        {urlData.short_url}
      </a>
      <button onClick={copyText}>
        {copied === urlData.short_url ? "Copied!" : "Copy"}
      </button>
    </LinkWrapper>
  );
}
