import {SelectBox, SelectImage, SelectRemove} from "../styles/Gallery";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const SelectPic = ({picture, remove}: {picture: string, remove: VoidFunction}) => {
    const {t} = useTranslation("common");

    return picture !== "" ? <SelectBox>
        <SelectRemove tabIndex={100} onClick={() => remove()}>{t("common:goback")}</SelectRemove>
        <SelectImage><Image src={picture} alt={picture} fill blurDataURL={picture}/></SelectImage>
    </SelectBox> : null;
}

export default SelectPic;