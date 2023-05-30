import {SelectBox, SelectImage, SelectRemove} from "../styles/SelectPicture";
import Image from "next/legacy/image";
import useTranslation from "next-translate/useTranslation";

const SelectPic = ({picture, remove}: {picture: string, remove: VoidFunction}) => {
    const {t} = useTranslation("common");

    return picture !== "" ? <SelectBox>
        <SelectRemove tabIndex={100} onClick={() => remove()}>{t("common:goback")}</SelectRemove>
        <SelectImage><Image src={picture} alt={picture} layout="fill" placeholder="blur" blurDataURL={picture}/></SelectImage>
    </SelectBox> : null;
}

export default SelectPic;