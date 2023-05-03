import {
    AboutProject,
    Carrd,
    CarrdBox,
    CarrdImage,
    FocusStyledA, LinkColor,
    Main,
    Name,
    PLWarn,
    Section,
    UserLink
} from "./about.style";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const About = () => {
    const {t, lang} = useTranslation("about");

    const authors = [
        {
            imageSRC: "/images/lempek.jpg",
            name: "Piotr „Lempek” Lempkowski",
            github: "https://github.com/LempekPL",
            twitter: "https://twitter.com/LEMPEKPL"
        },
        {
            imageSRC: "/images/wikapo.jpg",
            name: "Wiktor „wiKapo” Polanowski",
            github: "https://github.com/wiKapo",
            youtube: "https://www.youtube.com/channel/UCxxCbKfO_F4i6FEB7s9P2iQ"
        }
    ]

    const sources = [
        "https://warhist.pl",
        "https://historiaposzukaj.pl/",
        "https://pl.wikipedia.org/wiki/Obrona_Poczty_Polskiej_w_Gdańsku",
        "https://pl.wikipedia.org/wiki/Poczta_Polska_w_Wolnym_Mieście_Gdańsku",
        "https://web.archive.org/web/20100103231436/http://mhmg.pl/index.php?view=artykul,32&oddzial=6"
    ]

    let cards = [];

    for (const author of authors) {
        cards.push(<Carrd key={author.name}>
            <CarrdImage>
                <Image src={author.imageSRC} alt={author.name} width={"192"} height={"192"}
                       blurDataURL={author.imageSRC} placeholder="blur"/>
            </CarrdImage>
            <Name>{author.name}</Name>
            {author?.github && <UserLink>
                <Link href={author.github} passHref>
                    <FocusStyledA>
                        Github
                    </FocusStyledA>
                </Link>
            </UserLink>}
            {author?.twitter && <UserLink>
                <Link href={author.twitter} passHref>
                    <FocusStyledA>
                        Twitter
                    </FocusStyledA>
                </Link>
            </UserLink>}
            {author?.youtube && <UserLink>
                <Link href={author.youtube} passHref>
                    <FocusStyledA>
                        YouTube
                    </FocusStyledA>
                </Link>
            </UserLink>}
        </Carrd>);
    }

    let sourcesRendered = [];

    for (const source of sources) {
        sourcesRendered.push(
            <li key={source}>
                <FocusStyledA href={source}>
                    {source}
                </FocusStyledA>
            </li>
        )
    }

    return (<>
        <Main>
            <Section>{t("authors")}</Section>
            <CarrdBox>
                {cards}
            </CarrdBox>

            <Section>{t("aboutProject")}</Section>
            <AboutProject>
                {t("about")} <LinkColor href="https://github.com/BigBruhCoders/defenders-of-the-Polish-post-office">https://github.com/BigBruhCoders/defenders-of-the-Polish-post-office</LinkColor>
            </AboutProject>

            <Section>{t("sources")}</Section>
            {lang === "en" && <PLWarn>Sources are in Polish!!!</PLWarn>}
            <ul>
                {sourcesRendered}
            </ul>
        </Main>
    </>);
}

export default About;