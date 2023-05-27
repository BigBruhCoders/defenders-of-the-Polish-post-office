import {Property} from "csstype";

export type ThemeName = "light" | "dark"

export type LocaleName = "pl" | "en"

export type Theme = {
    type: "light" | "dark"
    globalBackgroundColor: Property.Color
    globalBackgroundColor2: Property.Color
    globalBackgroundTextColor: Property.Color
    globalBoxBackgroundColor: Property.Color
    globalTextColor: Property.Color
    mainColor: Property.Color
    mainTextColor: Property.Color
    footerBorderTopColor: Property.Color
    navbarBackgroundColor: Property.Color
    navbarTextColor: Property.Color

    primaryButtonColor: Property.Color
    primaryButtonTextColor: Property.Color




    // primaryBackgroundColor: Property.Color
    // primaryTextColor: Property.Color
    //
    // secondaryBackgroundColor: Property.Color
    // secondaryTextColor: Property.Color
    // navbarMenuButtonBackgroundColor: Property.Color
    // navbarMenuButtonIconColor: Property.Color
    //
    // navbarDropdownBorderColor: Property.Color
    // navbarDropdownBackgroundColor: Property.Color
    // navbarDropdownTextColor: Property.Color
    //
    // navbarDropdownSettingsBackgroundColor: Property.Color
    // navbarDropdownSettingsTextColor: Property.Color


}