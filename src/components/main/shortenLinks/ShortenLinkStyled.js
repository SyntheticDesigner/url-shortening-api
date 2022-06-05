import styled from "styled-components";
import bgDesktop from "../../../images/bg-shorten-desktop.svg";
import bgMobile from "../../../images/bg-shorten-mobile.svg";

export const ShortenLinkForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 64px;
  background-image: url(${bgDesktop});
  @media(max-width: 900px){
    background-image: url(${bgMobile});
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--bg-brand);
  border-radius: 12px;
  gap: 63px;
  transform: translateY(-50%);
  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;
    margin: auto;
    padding: 20px;
    gap: 16px;
  }
  input {
    font-size: 1.2em;
  }
  .input-wrapper {
    flex-grow: 1;
    position: relative;
    &::before {
      content: "Please add a link";
      font-style: italic;
      position: absolute;
      color: var(--error);
      z-index: -1;
      bottom: 0px;
      transition: transform 0.5s;
      transform: ${({ error }) =>
        error ? "translateY(100%)" : "translateY(-20%)"};
      padding: 8px 0px;
      opacity: ${({ error }) => (error ? "1" : "0")};
    }
  }
  #link-field {
    padding: 16px 32px;
    width: 100%;
    border-radius: 12px;
    outline: none;
    border: ${({ error }) =>
      error ? "2px solid var(--error)" : "2px solid rgba(0, 0, 0, 0)"};
    &::placeholder {
      color: ${({ error }) => (error ? "var(--error)" : "auto")};
    }
    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${({ error }) => (error ? "var(--error)" : "auto")};
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${({ error }) => (error ? "var(--error)" : "auto")};
    }
  }
  #submit-button {
    padding: 16px 40px;
    border-radius: 12px;
    color: white;
    background-color: var(--brand-primary);
    border: none;
    transition: filter 0.3s;
    &:hover {
      filter: saturate(50%) brightness(120%);
    }
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 20px;
  font-size: 1.2em;
  align-items: center;
  @media (max-width: 900px) {
    width: 90%;
    margin: 0px auto 20px;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
  }
  a {
    color: var(--font-color-primary);
    text-decoration: none;
  }
  .long-url {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    flex-grow: 1;
    margin-right: 32px;
    @media (max-width: 900px) {
      margin: 0;
      width: 100%;
      border-bottom: 1px solid var(--font-color-secondary);
      padding: 16px;
      height: 3em;
      line-height: 1.8em;
    }
  }
  .short-url {
    display: block;
    margin-left: auto;
    margin-right: 32px;
    color: var(--brand-primary);
    @media (max-width: 900px) {
      text-align: left;
      width: 100%;
      padding: 16px;
    }
  }
  button {
    padding: 10px;
    min-width: 120px;
    border: none;
    border-radius: 8px;
    background-color: ${({ copied }) =>
      copied ? "var(--bg-brand)" : "var(--brand-primary)"};
    color: white;
    font-weight: 700;
    font-size: 1em;
    transition: filter 0.3s;
    &:hover {
      filter: saturate(50%) brightness(120%);
    }
    @media (max-width: 900px) {
      text-align: left;
      width: calc(100% - 32px);
      margin: 0px 16px 16px;
      text-align: center;
    }
  }
`;
