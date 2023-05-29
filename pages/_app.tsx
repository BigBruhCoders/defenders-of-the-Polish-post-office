import {useEffect, useState} from "react";
import Head from "next/head";
import {getCookie, setCookie} from "cookies-next";
import "../styles/globals.css";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {getTheme} from "../theme/theme";
import {Theme, ThemeName} from "../types";
import {NavbarComponent} from "../components/Navbar";
import {Footer, Flexbox, FlexGrow} from "../styles/Global";
import useTranslation from "next-translate/useTranslation";
// import Notification from "../old_components/Notification/Notification";
//
import {AppProps} from "next/app";

const GlobalStyles = createGlobalStyle`
  html, body {
    background-image: ${(props: { theme: Theme }) => `linear-gradient(to bottom, ${props.theme.globalBackgroundColor}, ${props.theme.globalBackgroundColor2})`};
    //background: var(--global-background-color);
  }
  
  // load styles as css variables for ease of use
  * {
    --global-background-color: ${(props: { theme: Theme }) => props.theme.globalBackgroundColor};
    --global-background-color-alt: ${(props: { theme: Theme }) => props.theme.globalBackgroundColor2};
    --global-background-text-color: ${(props: { theme: Theme }) => props.theme.globalBackgroundTextColor};
    --global-box-background-color: ${(props: { theme: Theme }) => props.theme.globalBoxBackgroundColor};
    --global-box-background-color-alt: ${(props: { theme: Theme }) => props.theme.globalBoxBackgroundColorAlt};
    --global-text-color: ${(props: { theme: Theme }) => props.theme.globalTextColor};
    --main-color: ${(props: { theme: Theme }) => props.theme.mainColor};
    --main-text-color: ${(props: { theme: Theme }) => props.theme.mainTextColor};
    --footer-border-top-color: ${(props: { theme: Theme }) => props.theme.footerBorderTopColor};
    --primary-button-background: ${(props: { theme: Theme }) => props.theme.primaryButtonColor};
    --primary-button-text-background: ${(props: { theme: Theme }) => props.theme.primaryButtonTextColor};
    --navbar-background-color: ${(props: { theme: Theme }) => props.theme.navbarBackgroundColor};
    --navbar-text-color: ${(props: { theme: Theme }) => props.theme.navbarTextColor};
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
            <FlexGrow/>
            <Footer><p>{t("common:project")}</p></Footer>
        </Flexbox>
        {/*<Notification/>*/}
    </ThemeProvider>
}

export default App;