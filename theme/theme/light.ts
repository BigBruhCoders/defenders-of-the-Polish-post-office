import DARK from "./dark";
import {Theme} from "../../types";

// todo: change placeholders
const light: Theme = {
    ...DARK,
    type: "light",
    globalBackgroundColor: "#fff",
    globalBackgroundColor2: "#c4c4c4",
    globalBackgroundTextColor: "#000000",
    globalBoxBackgroundColor: "#e5e5e5",
    globalTextColor: "#000",
    navbarBackgroundColor: "#c5c5c5",
    navbarTextColor: "#000000",

    mainColor: "#2f50cc",
    mainTextColor: "#ffffff",

    footerBorderTopColor: "#808080",

    primaryButtonColor: "#d0d0d0",
    primaryButtonTextColor: "#868686",
}

export default light;