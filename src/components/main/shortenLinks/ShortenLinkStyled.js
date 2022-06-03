import styled from "styled-components";
import bgDesktop from "../../../images/bg-shorten-desktop.svg";
import bgMobile from "../../../images/bg-shorten-mobile.svg";
export const ShortenLinkForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 64px;
  background-image: url(${bgDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--bg-brand);
  border-radius: 12px;
  gap: 63px;
  transform: translateY(-50%);
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
      transform: ${({ error }) => (error ? "translateY(100%)" : "translateY(-20%)")};
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
      color: ${({ error }) =>
        error ? "var(--error)" : "auto"};
    }
    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${({ error }) =>
        error ? "var(--error)" : "auto"};
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${({ error }) =>
        error ? "var(--error)" : "auto"};
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
  a {
    color: var(--font-color-primary);
    text-decoration: none;
  }
  .short-url {
    display: block;
    margin-left: auto;
    margin-right: 32px;
    color: var(--brand-primary);
  }
  button {
    padding: 10px;
    width: 120px;
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
  }
`;
