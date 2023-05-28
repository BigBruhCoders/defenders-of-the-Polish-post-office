import {Property} from "csstype";

export type ThemeName = "light" | "dark"

export type LocaleName = "pl" | "en"

export type Theme = {
    type: "light" | "dark"
    globalBackgroundColor: Property.Color
    globalBackgroundColor2: Property.Color
    globalBackgroundTextColor: Property.Color
    globalBoxBackgroundColor: Property.Color
    globalBoxBackgroundColorAlt: Property.Color
    globalTextColor: Property.Color
    mainColor: Property.Color
    mainTextColor: Property.Color
    footerBorderTopColor: Property.Color
    navbarBackgroundColor: Property.Color
    navbarTextColor: Property.Color
    primaryButtonColor: Property.Color
    primaryButtonTextColor: Property.Color

}

export type LearnPageData = {
    name: string
    introduction: string
    parts: string[]
    sections: string[][]
}

export type Question = {
    question: string
    good: string
    wrong: string[]
}