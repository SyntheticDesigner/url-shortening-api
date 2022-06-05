import React, { useState, useEffect } from "react";
import { LinkList, ShortenLinkForm } from "./ShortenLinkStyled";
import { useHttp } from "../../../utils";
import Link from "./Link";

export default function ShortenLink() {
  const [shortUrls, setShortUrls] = useState([]);
  const [longUrl, setLongUrl] = useState("");
  const [error, setError] = useState(false);
  const [copiedValue, setCopiedValue] = useState("");

  const url = new URL("https://t.ly/api/v1/link/shorten");

  const params = {
    api_token: process.env.REACT_APP_TLY_API_KEY,
  };

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  let body = {
    long_url: longUrl,
    domain: "https://t.ly/",
    include_qr_code: false,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          setError(true);
          throw new Error("Please add a link");
        }
        return response.json();
      })
      .then((json) => {
        setError(false);
        setLongUrl("");

        setShortUrls([...shortUrls, json]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    navigator.clipboard.readText().then((text) => {
      if (text) {
        setCopiedValue(text);
      }
    });
  });

  return (
    <>
      <ShortenLinkForm onSubmit={handleSubmit} error={error}>
        <div className='input-wrapper'>
          <input
            type='text'
            name='link-field'
            id='link-field'
            placeholder='Shorten a link here...'
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </div>
        <input
          type='submit'
          name='submit-button'
          id='submit-button'
          value='Shorten It!'
        />
      </ShortenLinkForm>
      <LinkList className="link-list">
        {shortUrls.length > 0 &&
          shortUrls.map((urlData) => (
            <Link
              key={urlData.short_id}
              urlData={urlData}
              copied={copiedValue}
              setCopied={setCopiedValue}
            />
          ))}
      </LinkList>
    </>
  );
}
