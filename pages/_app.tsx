import {useEffect, useState} from "react";
import Head from "next/head";
import {getCookie, setCookie} from "cookies-next";
import "../styles/globals.css";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {getTheme} from "../theme/theme";
import {Theme, ThemeName} from "../types";
import {NavbarComponent} from "../components/Navbar";
import {Footer, Flexbox} from "../styles/Global";
import useTranslation from "next-translate/useTranslation";
// import Notification from "../old_components/Notification/Notification";
//
import {AppProps} from "next/app";

const GlobalStyles = createGlobalStyle`
  html, body {
    background: var(--global-background-color);
  }
  
  // load styles as css variables for ease of use
  * {
    --global-background-color: ${(props: { theme: Theme }) => props.theme.globalBackgroundColor};
    --global-box-background-color: ${(props: { theme: Theme }) => props.theme.globalBoxBackgroundColor};
    --global-text-color: ${(props: { theme: Theme }) => props.theme.globalTextColor};
    
    
    --primary-background-color: ${(props: { theme: Theme }) => props.theme.primaryBackgroundColor};
    --primary-text-color: ${(props: { theme: Theme }) => props.theme.primaryTextColor};
    // --secondary-background-color: ${(props: { theme: Theme }) => props.theme.secondaryBackgroundColor};
    // --secondary-text-color: ${(props: { theme: Theme }) => props.theme.secondaryTextColor};
    --navbar-background-color: ${(props: { theme: Theme }) => props.theme.navbarBackgroundColor};
    --navbar-text-color: ${(props: { theme: Theme }) => props.theme.navbarTextColor};
    --navbar-menu-button-background-color: ${(props: { theme: Theme }) => props.theme.navbarMenuButtonBackgroundColor};
    --navbar-menu-button-icon-color: ${(props: { theme: Theme }) => props.theme.navbarMenuButtonIconColor};
    --navbar-dropdown-border-color: ${(props: { theme: Theme }) => props.theme.navbarDropdownBorderColor};
    --navbar-dropdown-background-color: ${(props: { theme: Theme }) => props.theme.navbarDropdownBackgroundColor};
    --navbar-dropdown-text-color: ${(props: { theme: Theme }) => props.theme.navbarDropdownTextColor};
    --navbar-dropdown-settings-background-color: ${(props: { theme: Theme }) => props.theme.navbarDropdownSettingsBackgroundColor};
    --navbar-dropdown-settings-text-color: ${(props: { theme: Theme }) => props.theme.navbarDropdownSettingsTextColor};
  }
`;

const App = ({Component, pageProps}: AppProps) => {
    const [themeName, setThemeName] = useState<ThemeName>("dark");
    useEffect(() => setThemeName(getCookie("NEXT_THEME") as ThemeName), []);

    const themeChange = (themeName: ThemeName) => {
        setThemeName(themeName);
        setCookie("NEXT_THEME", themeName, {
            sameSite: true
        });
    }

    const {t} = useTranslation("common");

    return <ThemeProvider theme={getTheme(themeName)}>
        <Head>
            <link href="/favicon.ico" rel="icon" type="image/x-icon"/>
            <title>{t("defenders-of-the-Polish-post-office")}</title>
        </Head>
        <NavbarComponent themeChange={themeChange}/>
        <Flexbox>
            <GlobalStyles/>
            <Component {...pageProps} />
            <Footer><p>{t("common:project")}</p></Footer>
        </Flexbox>
        {/*<Notification/>*/}
    </ThemeProvider>
}

export default App;