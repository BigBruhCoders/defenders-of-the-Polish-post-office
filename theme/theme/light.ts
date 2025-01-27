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
    globalBoxBackgroundColorAlt: "#d5d5d5",
    globalTextColor: "#000",
    navbarBackgroundColor: "#c5c5c5",
    navbarTextColor: "#000000",

    mainColor: "#203a9f",
    mainTextColor: "#ffffff",

    footerBorderTopColor: "#808080",

    primaryButtonColor: "#bdbdbd",
    primaryButtonTextColor: "#868686",
}

export default light;