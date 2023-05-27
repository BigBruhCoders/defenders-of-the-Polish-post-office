import DARK from "./dark";
import {Theme} from "../../types";

// todo: change placeholders
const light: Theme = {
    ...DARK,
    type: "light",
    globalBackgroundColor: "#fff",
    globalBoxBackgroundColor: "#e5e5e5",
    globalTextColor: "#000",

    primaryBackgroundColor: "#d5d5d5",
    primaryTextColor: "#000000",

    footerBackgroundColor: "#a9a9a9",
    footerTopColor: "#808080",
    // footerText: "#000",

    navbarBackgroundColor: "#c5c5c5",
    navbarTextColor: "#000000",

    navbarMenuButtonBackgroundColor: "#b9b9b9",
    navbarMenuButtonIconColor: "#000000",

    navbarDropdownBorderColor: "#8f8f8f",
    navbarDropdownBackgroundColor: "#b8b8b8",
    navbarDropdownTextColor: "#000000",

    navbarDropdownSettingsBackgroundColor: "#a8a8a8",
    navbarDropdownSettingsTextColor: "#000000",
}

export default light;