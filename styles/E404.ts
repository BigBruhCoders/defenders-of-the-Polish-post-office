import styled from "styled-components";
import Link from "next/link";

export const MainBox = styled.div`
  position: relative;
  background-color: var(--global-box-background-color);
  color: var(--global-text-color);
  padding-top: 1rem;
  margin: 1rem 30rem 5rem;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  border-top: var(--main-color) solid .5rem;
  border-bottom: var(--main-color) solid .5rem;

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
  
  & {
    text-align: center;
  }
  
   @media (max-width: 1500px) {
     margin-left: 15rem;
     margin-right: 15rem;
   }

   @media (max-width: 800px) {
     margin-left: 2rem;
     margin-right: 2rem;
     margin-bottom: 1rem;
   }

   @media (max-width: 500px) {
     margin-left: .5rem;
     margin-right: .5rem;
     padding: 1rem 2rem;
   }
`;

export const ErrorText = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;

export const ErrorSubText = styled.p``;

export const ButtonLinkRedirect = styled(Link)`
  height: 5rem;
  width: 50%;
  align-self: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-button-background);
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--primary-button-text-background)"};
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border-bottom: var(--main-color) solid .5rem;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 90%;
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
    transition: 500ms;
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