import styled from "styled-components";

export const NotifBox = styled.div<{$gotInfo: boolean}>`
  position: fixed;
  align-self: center;
  display: ${props => props.$gotInfo ? `none` : `flex`};
  background-color: var(--global-box-background-color);
  transition: 300ms;
  justify-content: space-around;
  gap: 1rem;
  align-content: center;
  justify-items: center;
  align-items: center;
  padding: 1rem 1.5rem;
  bottom: 1rem;
  z-index: 9999;
  p {
    text-align: center;
    color: var(--global-text-color);
  }

  border-top: var(--main-color) solid .5rem;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: .5rem;
    height: .5rem;
    width: .5rem;
    transform: skewX(-45deg);
    border-left: var(--main-color) solid .75rem;
    border-right: var(--main-color) solid .75rem;
  }
`;

export const NotifButton = styled.button`
  border: none;
  width: 5rem;
  height: 3rem;
  align-self: center;
  position: relative;
  font-size: clamp(1.25rem, 1.5vw, 2rem);
  background-color: var(--primary-button-background);
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--primary-button-text-background)"};
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border-bottom: var(--main-color) solid .5rem;
  z-index: 1;
  overflow: hidden;
  transition: 200ms;

  @media (max-width: 600px) {
    font-size: clamp(1rem, 5vw, 1.75rem);
  }

  :focus-visible {
    outline: 2px solid royalblue;
  }

  :is(:focus-visible, :hover) {
    color: #eee;
    background-color: ${props => props.theme.main_color};

    :before {
      transform: translateY(0);
    }
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(100%);
    background-color: var(--main-color);
    z-index: -1;
    transition: 200ms;
    transition-timing-function: ease-out;
  }

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    right: .5rem;
    height: .5rem;
    width: .5rem;
    transform: skewX(-45deg);
    border-left: var(--main-color) solid .75rem;
    border-right: var(--main-color) solid .75rem;
  }
`;
