import { ThemeOptions } from "@material-ui/core"

interface NewThemeInterface {
  palette:{
    text:{
      main:string
    },
    primary:{
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
  },
  spacing:(factor:number)=>any
}

export type ThemeTypes = ThemeOptions & NewThemeInterface

export type SizeType = "small" | "inherit" | "default" | "large" | undefined
