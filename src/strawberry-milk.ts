import { palette } from "./palette";

export const strawberryMilk = {
  name: "Strawberry Milk",
  type: "light",

  colors: {
    "editor.background": palette.background,
    "editor.foreground": palette.text,

    "editorCursor.foreground": palette.strawberry,

    "editor.selectionBackground": palette.rose,

    "editor.lineHighlightBackground": palette.surface,

    "editorLineNumber.foreground": palette.comment,

    "editorLineNumber.activeForeground": palette.strawberry,

    "sideBar.background": palette.surface,

    "activityBar.background": palette.surfaceHover,

    "statusBar.background": palette.sakura,
  },

  tokenColors: []
}