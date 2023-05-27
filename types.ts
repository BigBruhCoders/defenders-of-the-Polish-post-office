import {Property} from "csstype";

export type ThemeName = "light" | "dark"

export type LocaleName = "pl" | "en"

export type Theme = {
    type: "light" | "dark"
    globalBackgroundColor: Property.Color
    globalBoxBackgroundColor: Property.Color
    globalTextColor: Property.Color

    footerBackgroundColor: Property.Color
    footerTopColor: Property.Color

    primaryBackgroundColor: Property.Color
    primaryTextColor: Property.Color

    secondaryBackgroundColor: Property.Color
    secondaryTextColor: Property.Color


    navbarBackgroundColor: Property.Color
    navbarTextColor: Property.Color

    navbarMenuButtonBackgroundColor: Property.Color
    navbarMenuButtonIconColor: Property.Color

    navbarDropdownBorderColor: Property.Color
    navbarDropdownBackgroundColor: Property.Color
    navbarDropdownTextColor: Property.Color

    navbarDropdownSettingsBackgroundColor: Property.Color
    navbarDropdownSettingsTextColor: Property.Color


}