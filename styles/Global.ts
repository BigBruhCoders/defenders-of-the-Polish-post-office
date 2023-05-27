import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: var(--footer-height);
  background-color: var(--global-background-color-alt);
  border-top: 2px solid var(--footer-border-top-color);
  color: var(--global-background-text-color);
  text-align: center;
  display: table;

  p {
    display: table-cell;
    vertical-align: middle;
  }
`;

export const Flexbox = styled.div`
  flex-wrap: wrap;
  padding-top: var(--navbar-height);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const FlexGrow = styled.div`
  flex-grow: 1;
`;