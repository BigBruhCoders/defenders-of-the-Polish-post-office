import dark from "./theme/dark";
import light from "./theme/light";
import {Theme, ThemeName} from "../types";

export const getTheme = (name: ThemeName): Theme => {
    switch (name) {
        case "light":
            return light;
        default:
            return dark;
    }
}