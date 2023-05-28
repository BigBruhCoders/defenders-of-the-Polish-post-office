import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import {
    ContentBox,
    MainBox,
    SectionsBox,
    TopicLink,
    Topics,
    TopicsBox,
    TitleText,
    Sections,
    Section,
    ContentIntroduction,
    ContentName,
    ContentSectionTitle,
    ContentSectionData,
    ContentSectionBox,
    ContentImage
} from "../styles/Learn";
import Link from "next/link";
import Image from "next/image";
import {LearnPageData} from "../types";

export const LearnComponent = () => {
    const {t} = useTranslation("learn");
    const router = useRouter();
    const {learn_page} = router.query;
    const themes = ["post-office", "war", "post-office-now"];

    if (!themes.includes(learn_page as string)) {
        (async () => {
            await router.replace("/learn/post-office")
        })();
        return <></>
    }

    let content: LearnPageData = t(`content.${learn_page}`, {count: 0}, {returnObjects: true});

    return <MainBox>
        <TopicsBox>
            <TitleText>{t("topics").toUpperCase()}</TitleText>
            <Topics>
                {themes.map(theme => <TopicLink key={theme} href={`/learn/${theme}`} scroll={false}>
                    {t(theme)}
                </TopicLink>)}
            </Topics>
        </TopicsBox>
        <ContentBox>
            <ContentName>{content.name}</ContentName>
            {content?.introduction?.length > 0 ?
                <ContentIntroduction>{content.introduction}</ContentIntroduction> : null}
            {content.sections.map((sections, i) => <ContentSectionBox key={`content.${i}`}>
                <ContentSectionTitle
                    id={encodeURIComponent(content.parts[i].replace(/\s/g, ""))}>
                    {content.parts[i].toUpperCase()}
                </ContentSectionTitle>
                {sections.map((section, j) => section.startsWith("/images/") ?
                    <ContentImage key={`content.${i}.${j}`}><Image src={section} alt={section} fill/></ContentImage> :
                    <ContentSectionData key={`content.${i}.${j}`}>{section}</ContentSectionData>)}
            </ContentSectionBox>)}
        </ContentBox>
        <SectionsBox>
            <TitleText>{t("sections").toUpperCase()}</TitleText>
            <Sections>
                {content.parts.map(section => <Section key={section}>
                    <Link href={`/learn/${learn_page}#${encodeURIComponent(section.replace(/\s/g, ""))}`}
                          tabIndex={0} scroll={false}>{section}</Link>
                </Section>)}
            </Sections>
        </SectionsBox>
    </MainBox>
}