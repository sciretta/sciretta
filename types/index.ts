import { ThemeOptions } from "@material-ui/core"

interface NewThemeInterface {
  palette:{
    text:{
      main:string
    },
    secondary:{
      main:string
    },
    terciary:{
      main:string
    }
  },
  breakpoints:{
    down:(key:string)=>string
  }
}

export type ThemeTypes = ThemeOptions & NewThemeInterface

export type SizeType = "small" | "inherit" | "default" | "large" | undefined
