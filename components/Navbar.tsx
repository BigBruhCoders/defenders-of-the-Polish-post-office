import sun from "/public/images/sun.svg";
import moon from "/public/images/moon.svg";
import Image from "next/image";
import {LocaleName, ThemeName} from "../types";
import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";
import {getCookie, setCookies} from "cookies-next";
import setLanguage from "next-translate/setLanguage";
import {Navbar, NavbarIcon, NavbarItem, NavbarThemeButton, NavbarIconBox, NavbarLangButton} from "../styles/Navbar";
import {FlexGrow} from "../styles/Global";

type NavbarComponentType = { themeChange: (themeName: ThemeName) => void }

export const NavbarComponent = ({themeChange}: NavbarComponentType) => {
    const {t, lang} = useTranslation("navbar");
    const router = useRouter();

    // callback for changing language
    const changeLocale = (localeName: LocaleName) => {
        setCookies("NEXT_LOCALE", localeName, {sameSite: true});
        (async () => {
            await setLanguage(localeName, false);
            // quiz needs to be reloaded
            // the translation doesn't update
            if (router.pathname === "/quiz") {
                router.reload();
            }
        })()
    }

    return <Navbar>
        <NavbarIcon href="/" tabIndex={-1}>
            <Image src="/images/opp-logo.png" alt="OPP logo" fill/>
        </NavbarIcon>
        <NavbarItem href="/">
            {t("home")}
        </NavbarItem>
        <FlexGrow/>
        <NavbarThemeButton tabIndex={0} onClick={() => {
            getCookie("NEXT_THEME") === "dark" ? themeChange("light") : themeChange("dark")
        }}>
            <NavbarIconBox>
                <span><Image src={sun} alt={t("changeTheme")} fill/></span>
                <span><Image src={moon} alt={t("changeTheme")} fill/></span>
            </NavbarIconBox>
        </NavbarThemeButton>
        <NavbarLangButton onClick={() => {
            lang === "en" ? changeLocale("pl") : changeLocale("en")
        }}>
            {lang.toUpperCase()}
        </NavbarLangButton>
    </Navbar>;
}