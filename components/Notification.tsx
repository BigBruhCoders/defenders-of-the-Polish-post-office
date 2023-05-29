import {useEffect, useState} from "react";
import {getCookie, setCookies} from "cookies-next";
import {NotifBox, NotifButton} from "../styles/Notification";

export const Notification = () => {
    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
        setAccepted(Boolean(getCookie("INFO")) ?? false);
    }, []);

    const clicked = () => {
        setAccepted(true);
        setCookies("INFO", true, {sameSite: true});
    }

    return <NotifBox $gotInfo={accepted}>
        <p>Strona używa ciasteczek do zapisywania języka oraz motywu strony</p>
        <NotifButton onClick={clicked}>OK</NotifButton>
    </NotifBox>;
}
