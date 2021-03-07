import { makeStyles } from '@material-ui/core/styles'
import { ThemeTypes } from 'types'

const useStyles = makeStyles((theme:ThemeTypes) => ({
  text:{
    textAlign:'center',
    width:'100%'
  },
  container:{
    width:'100%'
  },
  fields:{
    backgroundColor:theme.palette.text.main,
    borderRadius:5
  },
  button:{
    backgroundColor:theme.palette.text.main,
    color:theme.palette.terciary.main,
    '&:hover': {
      backgroundColor: '#fefefe',
    }
  },
  icon:{
    color:theme.palette.text.main,
    margin:5
  },
  root:{
    height:'40vh',
    minHeight:300,
    background:theme.palette.secondary.main,
    boxShadow:'none',
    backdropFilter: 'blur(6px)'
  },
  card: {
    width:400,
    height:300,
    margin:20,
    [theme.breakpoints.down('sm')]:{
      width:260,
      height:230
    }
  },
  expCard:{
    width:390,
    height:430,
    [theme.breakpoints.down('sm')]:{
      width:300,
      height:370
    }
  }
}))

export default useStyles