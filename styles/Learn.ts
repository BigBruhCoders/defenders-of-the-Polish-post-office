import styled from "styled-components";
import Link from "next/link";

export const MainBox = styled.main`
  display: grid;
  margin: 1rem;
  gap: 1rem;
  grid-template-areas: "topics content sections";
  grid-template-columns: 15rem 1fr 20rem;
  align-items: flex-start;
  
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "topics sections" "content content";
    align-items: initial;
  }

  @media (max-width: 500px) {
    grid-template-columns: auto;
    grid-template-areas: "topics" "content" "sections";
  }
`;

export const TopicsBox = styled.div`
  grid-area: topics;
  position: sticky;
  width: 100%;
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--global-text-color)"};
  border-top: var(--main-color) solid .5rem;
  border-bottom: var(--main-color) solid .5rem;
  background-color: var(--global-box-background-color-alt);
  padding: 1rem;
  top: calc(var(--navbar-height) + 1rem);

  @media (max-width: 1000px) {
    position: relative;
    top: 0;
  }

  @media (max-width: 500px) {
    position: relative;
    top: 0;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: .5rem;
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
    left: .5rem;
    height: .5rem;
    width: .5rem;
    transform: skewX(-45deg);
    border-left: var(--main-color) solid .75rem;
    border-right: var(--main-color) solid .75rem;
  }
`;

export const TitleText = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 1.25rem;
`;

export const Topics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem;
`;

export const TopicLink = styled(Link)`
  height: 4rem;
  width: 100%;
  align-self: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem, 1vw, 20rem);
  background-color: var(--primary-button-background);
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--primary-button-text-background)"};
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border-bottom: var(--main-color) solid .5rem;
  z-index: 1;
  overflow: hidden;
  transition: 200ms;
  
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

export const ContentBox = styled.div`
  grid-area: content;
  position: relative;
  width: 100%;
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--global-text-color)"};
  border-top: var(--main-color) solid .5rem;
  border-bottom: var(--main-color) solid .5rem;
  background-color: var(--global-box-background-color);
  padding: 1rem;
  
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

export const ContentName = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
`;

export const ContentIntroduction = styled.p`
  margin: 1rem 2rem;
  text-align: justify;
`;

export const ContentSectionBox = styled.div`
  margin: .5rem;
`;

export const ContentSectionTitle = styled.p`
  font-weight: bold;
  text-align: left;
  font-size: 1.25rem;
`;

export const ContentImage = styled.div`
  position: relative;
  height: 20rem;
  
  img {
    object-fit: contain;
  }
`;

export const ContentSectionData = styled.p`
  margin: .5rem 0 .5rem .5rem;
  text-indent: 1rem;
  text-align: justify;
`;

export const SectionsBox = styled.div`
  grid-area: sections;
  position: sticky;
  top: calc(var(--navbar-height) + 1rem);
  width: 100%;
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--global-text-color)"};
  border-top: var(--main-color) solid .5rem;
  border-bottom: var(--main-color) solid .5rem;
  background-color: var(--global-box-background-color-alt);
  padding: 1rem;

  @media (max-width: 1000px) {
    position: relative;
    top: 0;
  }

  @media (max-width: 500px) {
    position: relative;
    top: 0;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: .5rem;
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
    left: .5rem;
    height: .5rem;
    width: .5rem;
    transform: skewX(-45deg);
    border-left: var(--main-color) solid .75rem;
    border-right: var(--main-color) solid .75rem;
  }
`;

export const Sections = styled.ul`
  margin-bottom: 1rem;
`;

export const Section = styled.li`
  margin-left: 2rem;
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--global-text-color)"};
  
  a {
    transition: 0ms;
    text-decoration: none;
    color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--global-text-color)"};
    
    :focus-visible {
      outline: 2px solid royalblue;
    }
    
    :is(:focus-visible, :hover) {
      outline: 4px solid var(--main-color);
    }
  }
`;