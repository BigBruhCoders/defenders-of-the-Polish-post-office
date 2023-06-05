import {useEffect, useState} from "react";
import {getCookie, setCookies} from "cookies-next";
import {NotifBox, NotifButton} from "../styles/Notification";
import useTranslation from "next-translate/useTranslation";

export const Notification = () => {
    const [accepted, setAccepted] = useState(false);
    const {t} = useTranslation("common");

    useEffect(() => {
        setAccepted(Boolean(getCookie("INFO")) ?? false);
    }, []);

    const clicked = () => {
        setAccepted(true);
        setCookies("INFO", true, {sameSite: true});
    }

    return <NotifBox $gotInfo={accepted}>
        <p>{t("cookies")}</p>
        <NotifButton onClick={clicked}>OK</NotifButton>
    </NotifBox>;
}
