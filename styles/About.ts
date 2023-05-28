import styled from "styled-components";

export const MainBox = styled.div`
  position: relative;
  background-color: var(--global-box-background-color);
  color: ${props => props.theme.type === "light" ? "var(--main-color)" : "var(--global-text-color)"};
  padding-top: 1rem;
  margin: .5rem 30rem;
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

  @media (max-width: 800px) {
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
  @media (max-width: 800px) {
    width: 100%;
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
    border-radius: 2rem 4rem;
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