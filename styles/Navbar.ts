import styled from "styled-components";
import Link from "next/link";

export const Navbar = styled.nav`
  background-color: var(--navbar-background-color);
  height: var(--navbar-height);
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1000;
`;

export const NavbarIcon = styled(Link)`
  width: calc(var(--navbar-height) - .5rem);
  height: calc(var(--navbar-height) - .5rem);
  margin: auto 4px;
  img {
    position: relative !important;
  }
`;

export const NavbarItem = styled(Link)`
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  line-height: var(--navbar-height);
  text-align: center;
  height: 100%;
  cursor: pointer;
  background-color: var(--navbar-background-color);
  color: var(--navbar-text-color);
  filter: brightness(100%);
  text-decoration: none;
  transition: filter 300ms, background-color 500ms;

  :focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }

  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(120%)"};
  }
`;

export const NavbarThemeButton = styled.button`
  display: block;
  border: none;
  background-color: var(--navbar-background-color);
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  height: 100%;
  line-height: var(--navbar-height);
  cursor: pointer;
  color: ${props => props.theme.navbar_theme_icon};
  filter: brightness(100%);
  transition: filter 300ms, background-color 500ms;

  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(120%)"};
  }

  :focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }

  @media (max-width: 500px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const NavbarIconBox = styled.div`
  --img-margin: 1.5rem;
  cursor: pointer;
  position: relative;
  height: calc(var(--navbar-height) - calc(2 * var(--img-margin)));
  margin: var(--img-margin) 0.25rem;
  aspect-ratio: 1/1;
  user-select: none;

  @media (max-width: 500px) {
    --img-margin: .5rem;
  }
  
  > :nth-child(${props => props.theme.type === "dark" ? 1 : 2}) {
    display: none;
  }
`;

export const NavbarLangButton = styled.button`
  line-height: var(--navbar-height);
  color: var(--navbar-text-color);
  background-color: var(--navbar-background-color);
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  height: 100%;
  cursor: pointer;
  filter: brightness(100%);
  border: none;
  user-select: none;
  transition: filter 300ms, background-color 500ms;

  @media (max-width: 500px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(120%)"};
  }

  :focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }
`;