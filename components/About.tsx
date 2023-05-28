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
        "need",
        "to",
        "find",
        "sources"
    ]

    return <MainBox>
        <SectionTitle>{t("authors")}</SectionTitle>
        <CreatorFlex>
            {authors.map(a => <CreatorBox key={a.name}>
                <CreatorImage><Image src={a.imageSRC} alt={a.name} blurDataURL={a.imageSRC} placeholder="blur" fill/></CreatorImage>
                <CreatorName>{a.name}</CreatorName>
                <CreatorLinks>{a.links.map(l => <StyledSocialLink key={l.name} href={l.link}>
                    {l.name[0].toUpperCase()+l.name.slice(1)}
                </StyledSocialLink>)}</CreatorLinks>
            </CreatorBox>)}
        </CreatorFlex>
        <SectionTitle>{t("aboutProject")}</SectionTitle>
        <AboutProject>{t("about")} <Link
            href="https://github.com/BigBruhCoders/defenders-of-the-Polish-post-office">https://github.com/BigBruhCoders/defenders-of-the-Polish-post-office</Link></AboutProject>
        <SectionTitle>{t("sources")}</SectionTitle>
        <Sources>
            {lang === "en" && <PLWarn>Sources are in Polish!!!</PLWarn>}
            {sources.map(source => <li key={source}>
                <FocusStyledLink href={source}>
                    {source}
                </FocusStyledLink>
            </li>)}
        </Sources>
    </MainBox>
}