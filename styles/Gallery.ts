import styled from "styled-components";

export const MainBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem 4rem;
  margin: 2rem;
  
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const PictureBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  gap: 1rem;
  cursor: pointer;

  :nth-child(2n) {
    background-color: var(--global-box-background-color);
  }

  :nth-child(2n+1) {
    background-color: var(--global-box-background-color-alt);
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

export const ImageBox = styled.div`
  position: relative;
  height: 20rem;

  img {
    object-fit: contain;
  }
`;

export const PictureText = styled.p`
  color: var(--global-text-color);
  text-align: center;
`;