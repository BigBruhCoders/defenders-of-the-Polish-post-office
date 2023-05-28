import styled from "styled-components";

export const MainBox = styled.div`
  position: relative;
  background-color: var(--global-box-background-color);
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--global-text-color)"};
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  margin: .5rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  
  @media (max-width: 800px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: calc(100vw - 1rem);
    margin-left: .5rem;
    margin-right: .5rem;
  }
  
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
`;

export const QuestionBox = styled.div``;

export const QuestionText = styled.p`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
`;

export const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AnswerButton = styled.button`
  border: none;
  height: 6rem;
  width: 70%;
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

export const StartBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StartText = styled.p`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  letter-spacing: .25rem;
`;

export const StartButton = styled.button`
  border: none;
  margin-top: 2rem;
  height: 5rem;
  width: 80%;
  align-self: center;
  position: relative;
  background-color: var(--primary-button-background);
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--primary-button-text-background)"};
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border-bottom: var(--main-color) solid .5rem;
  z-index: 1;
  overflow: hidden;
  transition: 200ms;
  letter-spacing: 2rem;
  font-weight: 900;
  font-size: 3rem;

  @media (max-width: 800px) {
    letter-spacing: 1rem;
    font-weight: 800;
    font-size: 2rem;
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

export const EndBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EndText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const EndScore = styled.p`
  font-size: 2rem;
  text-align: center;
`;

export const EndButton = styled.button`
  border: none;
  height: 6rem;
  width: 70%;
  align-self: center;
  position: relative;
  font-size: clamp(1rem, 2vw, 20rem);
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
    font-size: clamp(1rem, 6vw, 20rem);
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