import styled from "styled-components";
import Link from "next/link";

export const Main = styled.main`
`;

export const MainImageBox = styled.div`
  position: relative;
  height: 20rem;

  @media (max-width: 750px) {
    height: 15rem;
  }

  @media (max-width: 400px) {
    height: 10rem;
  }
  
  img {
    object-fit: cover;
  }
`;

export const QuoteBox = styled.div`
  background-color: var(--main-color);
  color: var(--main-text-color);
  padding: 2rem;
  width: 100%;
  font-size: clamp(1.75rem, 3vw, 3rem);
  font-weight: bold;
  font-family: "Times New Roman", serif;
  display: grid;
  gap: 1rem;

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export const QuoteName = styled.div`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: normal;
  justify-self: end;
  font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export const ButtonsBox = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  margin: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem clamp(2rem, 6vw, 10rem);
  font-size: clamp(1rem, 1.1vw, 20rem);
  background-color: var(--primary-button-background);
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--primary-button-text-background)"};
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border-bottom: var(--main-color) solid .5rem;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 550px) {
    font-size: 1rem;
    padding: 2rem 1rem;
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