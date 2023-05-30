import {ImageBox, MainBox, PictureBox, PictureText} from "../styles/Gallery";
import gallery from "../public/gallery_desc.json";
import useTranslation from "next-translate/useTranslation";
import Image from "next/legacy/image";
import {useState} from "react";
import SelectPicture from "./SelectPicture";

export const GalleryComponent = () => {
    const {t} = useTranslation("gallery");
    const [select, setSelect] = useState<string>("");

    return <MainBox>
        {gallery.map(p => <PictureBox key={p.nameID} onClick={() => setSelect(p.src)}>
            <ImageBox><Image src={p.src} alt={t(p.nameID)} layout="fill" placeholder="blur" blurDataURL={p.src} sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}/></ImageBox>
            <PictureText>{t(p.nameID)} ({p.year} {t("year")}) {p.author}</PictureText>
        </PictureBox>)}
        {select !== "" ? <SelectPicture picture={select} remove={() => setSelect("")}/> : null}
    </MainBox>
}