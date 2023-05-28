import {ImageBox, MainBox, PictureBox, PictureText, SelectImage, SelectBox, SelectRemove} from "../styles/Gallery";
import gallery from "../public/gallery_desc.json";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import {useState} from "react";

export const GalleryComponent = () => {
    const {t} = useTranslation("gallery");
    const [select, setSelect] = useState<string>("");


    return <MainBox>
        {gallery.map(p => <PictureBox key={p.nameID} onClick={() => setSelect(p.src)}>
            <ImageBox><Image src={p.src} alt={t(p.nameID)} fill blurDataURL={p.src} sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}/></ImageBox>
            <PictureText>{t(p.nameID)} ({p.year} {t("year")}) {p.author}</PictureText>
        </PictureBox>)}
        {select !== "" ? <SelectBox>
            <SelectRemove tabIndex={100} onClick={() => setSelect("")}>{t("common:goback")}</SelectRemove>
            <SelectImage><Image src={select} alt={select} fill blurDataURL={select}/></SelectImage>
        </SelectBox> : null}
    </MainBox>
}