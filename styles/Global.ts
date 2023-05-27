import styled from "styled-components";

export const Footer = styled.footer`
  align-self: flex-end;
  width: 100%;
  height: var(--footer-height);
  background-color: ${props => props.theme.footerBackgroundColor};
  border-top: 2px solid ${props => props.theme.footerTopColor};
  color: ${props => props.theme.globalTextColor};
  text-align: center;
  display: table;
  overflow: hidden;

  p {
    overflow: hidden;
    display: table-cell;
    vertical-align: middle;
  }
`;

export const Flexbox = styled.div`
  padding-top: var(--navbar-height);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const FlexGrow = styled.div`
  flex-grow: 1;
`;