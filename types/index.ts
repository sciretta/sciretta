import { ThemeOptions } from '@material-ui/core'

interface NewThemeInterface {
  palette: {
    text: {
      main: string
    }
    primary: {
      main: string
    }
    secondary: {
      main: string
    }
    terciary: {
      main: string
    }
  }
  breakpoints: {
    down: (key: string) => string
  }
  spacing: (factor: number) => any
}

export type ThemeTypes = ThemeOptions & NewThemeInterface

export type SizeType = 'small' | 'inherit' | 'default' | 'large' | undefined

export interface DataInterface {
  from_name: string
  email: string
  message: string
}

export interface SuccessInterface {
  success: boolean
}

export interface CardInterface {
  img: string
  name: string
  exp?: {
    time: string
    url: string
  }
}
