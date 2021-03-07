import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const theme: any = {
  palette: {
  	primary:{
  		main:'rgba(0,0,0,.3)'
  	},
    secondary:{
      main:'rgba(0,0,0,.7)'
    },
    terciary:{
      main:'rgba(0,0,0,.94)'
    },
    text:{
      main:'#fafafa'
    },
    background:{
      paper:'rgba(33,33,33,.95)'
    }
  },
  typography:{
    h1:{
      fontFamily:"system-ui",
      fontWeight:700,
      fontSize:'3.5rem',
      color:grey[50]
    },
    h2:{
      fontFamily:"system-ui",
      fontWeight:700,
      fontSize:'2rem',
      color:grey[50]
    },
    h3:{
      fontFamily:"system-ui",
      fontWeight:500,
      fontSize:'1.8rem',
      color:grey[50]
    },
    h4:{
      fontFamily:"system-ui",
      fontWeight:400,
      fontSize:'0.7rem',
      color:grey[50]
    }
  }
}

export const lightTheme = createMuiTheme(theme)