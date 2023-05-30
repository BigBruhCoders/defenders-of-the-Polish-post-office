import {
    AboutProject,
    FocusStyledLink,
    MainBox,
    PLWarn,
    SectionTitle,
    Sources,
    CreatorFlex,
    CreatorBox,
    CreatorImage,
    CreatorName,
    CreatorLinks, StyledSocialLink
} from "../styles/About";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";
import {Component} from "react";

export const AboutComponent = () => {
    const {t, lang} = useTranslation("about");

    const authors = [
        {
            imageSRC: "/images/lempek.jpg",
            name: "Piotr „Lempek” Lempkowski",
            links: [
                {name: "github", link: "https://github.com/LempekPL"},
                {name: "twitter", link: "https://twitter.com/LEMPEKPL"}
            ]
        },
        {
            imageSRC: "/images/wikapo.jpg",
            name: "Wiktor „wiKapo” Polanowski",
            links: [
                {name: "github", link: "https://github.com/wiKapo"},
                {name: "youtube", link: "https://www.youtube.com/channel/UCxxCbKfO_F4i6FEB7s9P2iQ"}
            ]
        }
    ]

    const sources = [
        "https://warhist.pl",
        "https://historiaposzukaj.pl/",
        "https://pl.wikipedia.org/wiki/Obrona_Poczty_Polskiej_w_Gdańsku",
        "https://pl.wikipedia.org/wiki/Poczta_Polska_w_Wolnym_Mieście_Gdańsku",
        "https://web.archive.org/web/20100103231436/http://mhmg.pl/index.php?view=artykul,32&oddzial=6"
    ]
    let about = t("about").split("#LINK#");
    let aboutString: JSX.Element = <>{about[0]}<a href="https://www.DeepL.com/Translator" target="_blank" rel="noreferrer">https://www.DeepL.com/Translator</a>{about[1]} </>;

    return <MainBox>
        <SectionTitle>{t("authors")}</SectionTitle>
        <CreatorFlex>
            {authors.map(a => <CreatorBox key={a.name}>
                <CreatorImage><Image src={a.imageSRC} alt={a.name} blurDataURL={a.imageSRC} placeholder="blur"
                                     fill/></CreatorImage>
                <CreatorName>{a.name}</CreatorName>
                <CreatorLinks>{a.links.map(l => <StyledSocialLink key={l.name} href={l.link}>
                    {l.name[0].toUpperCase() + l.name.slice(1)}
                </StyledSocialLink>)}</CreatorLinks>
            </CreatorBox>)}
        </CreatorFlex>
        <SectionTitle>{t("aboutProject")}</SectionTitle>
        <AboutProject>{aboutString}
            <a href="https://github.com/BigBruhCoders/defenders-of-the-Polish-post-office" target="_blank"
               rel="noreferrer">https://github.com/BigBruhCoders/defenders-of-the-Polish-post-office</a></AboutProject>
        <div>
            <SectionTitle>{t("sources")}</SectionTitle>
            <Sources>
                {lang === "en" && <PLWarn>Sources are in Polish!!!</PLWarn>}
                {sources.map(source => <li key={source}>
                    <FocusStyledLink href={source}>
                        {source}
                    </FocusStyledLink>
                </li>)}
            </Sources>
        </div>
    </MainBox>
}