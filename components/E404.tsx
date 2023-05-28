import {MainBox, ErrorText, ErrorSubText, ButtonLinkRedirect} from "../styles/E404";
import useTranslation from "next-translate/useTranslation";

export const E404Component = () => {
    const {t} = useTranslation("common");

    return <MainBox>
        <ErrorText>{t("not-found")}</ErrorText>
        <ErrorSubText>{t("couldnt-find")}</ErrorSubText>
        <ButtonLinkRedirect href={"/"} tabIndex={0}>{t("navbar:home")}</ButtonLinkRedirect>
        <ButtonLinkRedirect href={"/learn/post-office"} tabIndex={0}>{t("learn")}</ButtonLinkRedirect>
        <ButtonLinkRedirect href={"/gallery"} tabIndex={0}>{t("gallery")}</ButtonLinkRedirect>
        <ButtonLinkRedirect href={"/quiz"} tabIndex={0}>{t("quiz")}</ButtonLinkRedirect>
        <ButtonLinkRedirect href={"/about"} tabIndex={0}>{t("aboutUs")}</ButtonLinkRedirect>
    </MainBox>
}