import styled from "styled-components";

export const MainBox = styled.div`
  position: relative;
  background-color: var(--global-box-background-color);
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--global-text-color)"};
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  margin: .5rem auto;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  
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

export const SectionTitle = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;

export const CreatorFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CreatorBox = styled.div`
  position: relative;
  background-color: var(--global-background-color-alt);
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;

  border-top: var(--main-color) solid .5rem;
  border-bottom: var(--main-color) solid .5rem;
  
  @media (max-width: 1400px) {
    width: 15rem;
  }
  
  @media (max-width: 1000px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: .5rem;
    height: .5rem;
    width: .5rem;
    transform: skewX(45deg);
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
    transform: skewX(45deg);
    border-left: var(--main-color) solid .75rem;
    border-right: var(--main-color) solid .75rem;
  }
`;

export const CreatorImage = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  width: 64%;

  img {
    object-fit: cover;
    border-radius: 2rem 3rem;
  }
`;

export const CreatorName = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const CreatorLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const StyledSocialLink = styled.a`
  color: ${props => props.theme.type === "light" ? "" : "royalblue"};

  :is(:hover, :focus-visible) {
    text-decoration: underline;
  }

  :focus-visible {
    outline: 2px solid royalblue;
  }
`;

export const AboutProject = styled.p`
  padding: 0 3rem;
  
  @media (max-width: 1000px) {
    padding: 0 1rem;
  }

  a {
    color: ${props => props.theme.type === "light" ? "" : "royalblue"};
    
    :is(:hover, :focus-visible) {
      text-decoration: underline;
    }

    :focus-visible {
      outline: 2px solid royalblue;
    }
  }
`;

export const PLWarn = styled.p`
  padding-left: 1rem;
  color: #ff8000;
`;

export const Sources = styled.ul`
  margin-left: 4rem;
`;

export const FocusStyledLink = styled.a`
  color: ${props => props.theme.type === "light" ? "" : "royalblue"};
  word-wrap: anywhere;

  :is(:hover, :focus-visible) {
    text-decoration: underline;
  }

  :focus-visible {
    outline: 2px solid royalblue;
  }
`;