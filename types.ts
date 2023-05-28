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

}

// {
//     "name": "Post Office",
//     "introduction": "PLACEHOLDER",
//     "parts": [
//     "before the war",
//     "the course of the Battle of Westerplatte",
//     "battle effects",
//     "about the defenders"
// ],
//     "sections": [

export type LearnPageData = {
    name: string
    introduction: string
    parts: string[]
    sections: string[][]
}