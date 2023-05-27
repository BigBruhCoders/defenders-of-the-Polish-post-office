import DARK from "./dark";
import {Theme} from "../../types";

// todo: change placeholders
const light: Theme = {
    ...DARK,
    type: "light",
    globalBackgroundColor: "#fff",
    globalBackgroundColor2: "#a9a9a9",
    globalBackgroundTextColor: "#000000",
    globalBoxBackgroundColor: "#e5e5e5",
    globalTextColor: "#000",
    navbarBackgroundColor: "#c5c5c5",
    navbarTextColor: "#000000",

    footerBorderTopColor: "#808080",

    primaryButtonColor: "#d0d0d0",
    primaryButtonTextColor: "#868686",
}

export default light;