import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  padding: calc(var(--navbar-height) + 1rem) 1rem 1rem;
  grid-template: "list content sections";

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    grid-template: "list" "sections" "content";
  }
`;

export const LeftBox = styled.div`
  border: 2px solid #780000;
  background-color: #ddd;
  padding: 2rem;
  height: auto;
  border-radius: 2rem;
  grid-area: list;
`;

export const RightBox = styled.div`
  border: 2px solid #780000;
  background-color: #ddd;
  padding: 2rem;
  height: auto;
  border-radius: 2rem;
  grid-area: sections;

  ul {
    padding-left: 1.5rem;
  }
`;

export const MainBox = styled.div`
  padding: 2rem;
  border: 2px solid #780000;
  background-color: #fff;
  border-radius: 2rem;
  grid-area: content;
`;

export const TextP = styled.p`
  margin-bottom: .5rem;
`;

export const TextMain = styled.p`
  color: darkred;
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 1rem;
  margin-bottom: .5rem;
`;

export const TextLeft = styled(TextMain)`
  margin-top: 0;
  margin-bottom: 0;
`;

export const TextSideBar = styled.a`
  border: 2px solid transparent;
  
  :is(:hover, :focus-visible) {
    border: 2px solid black;
  }

  :focus-visible {
    outline: 2px solid royalblue;
    outline-offset: -2px;
  }
`;

export const PageName = styled.p`
  color: #780000;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;

export const ButtonToTop = styled.a`
  display: block;
  background-color: #ddd;
  color: #780000;
  border-radius: 1rem;
  border: 2px solid #780000;
  margin: 1rem auto 0;
  padding: 1rem;
  transition-duration: .3s;
  width: 10rem;
  text-align: center;

  :is(:hover, :focus-visible) {
    background-color: #780000;
    color: #ffffff;
  }
  
  :focus-visible {
    outline: 2px solid royalblue;
    outline-offset: -2px;
  }
`;

export const SubjectsButtons = styled.a`
  display: block;
  background-color: #eee;
  color: #780000;
  border-radius: 1rem;
  border: 2px solid #780000;
  margin: 1rem auto 0;
  padding: 1rem;
  transition-duration: .3s;
  text-align: center;

  :is(:hover, :focus-visible) {
    background-color: #780000;
    color: #ffffff;
  }

  :focus-visible {
    outline: 2px solid royalblue;
    outline-offset: -2px;
  }
`;