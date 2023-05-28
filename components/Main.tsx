import Image from "next/image";
import {Main, MainImageBox, QuoteBox, ButtonsBox, ButtonLink, QuoteName} from "../styles/Main";
import useTranslation from "next-translate/useTranslation";

export const MainComponent = () => {
    const {t} = useTranslation("common");

    return <Main>
        <MainImageBox>
            <Image src="/images/gallery/polish_post_office_front.jpg" alt="Post Office" fill/>
        </MainImageBox>
        <QuoteBox>
            <p>{t("quote")}</p>
            <QuoteName>- Sławomir Czarlewski</QuoteName>
        </QuoteBox>
        <ButtonsBox>
            <ButtonLink href={"/learn/war"} tabIndex={0}>
                    {t("learn")}
            </ButtonLink>
            <ButtonLink href={"/gallery"} tabIndex={0}>
                    {t("gallery")}
            </ButtonLink>
            <ButtonLink href={"/quiz"} tabIndex={0}>
                    {t("quiz")}
            </ButtonLink>
            <ButtonLink href={"/about"}  tabIndex={0}>
                    {t("aboutUs")}
            </ButtonLink>
        </ButtonsBox>
    </Main>
}