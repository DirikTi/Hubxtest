import { DefaultTheme } from "@react-navigation/native";

export const lightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: "#28AF6E",
        text: "#13231B",
        tab: "#FFFFFFEB",
        tabInActive: "#28AF6E",
        tabActive: "#BDBDBD",
        background: "#28AF6E",
        card: "#28AF6E",
        border: "#28AF6E",
        notification: "#28AF6E"
    },
}

export const darkTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: "#28AF6E",
        text: "#13231B",
        tab: "#FFFFFFEB",
        tabInActive: "#28AF6E",
        tabActive: "#BDBDBD",
        background: "#28AF6E",
        card: "#28AF6E",
        border: "#28AF6E",
        notification: "#28AF6E"
    },
}

export type Theme = typeof lightTheme;