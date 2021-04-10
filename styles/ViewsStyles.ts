import { makeStyles } from '@material-ui/core/styles'
import { ThemeTypes } from 'types'

const bgImg = 'javascript-code.jpg'

const useStyles = makeStyles((theme: ThemeTypes) => ({
  //main
  root: {
    paddingTop: 50,
    minHeight: '95vh',
  },
  //backend
  backendRoot: {
    transform: 'skew(0deg,-10deg)',
    width: '90vw',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  backendBackground: {
    background: theme.palette.terciary.main,
    width: '100%',
    minHeight: '100vh',
    transform: 'skew(0deg,10deg) translateY(120px)',
    padding: '200px 0',
    marginBottom: 250,
  },
  text: {
    textAlign: 'center',
  },
  //frontend
  frontendRoot: {
    transform: 'skew(0deg,10deg)',
    width: '90vw',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  frontendBackground: {
    background: theme.palette.terciary.main,
    width: '100%',
    minHeight: '100vh',
    transform: 'skew(0deg,-10deg) translateY(-120px)',
    padding: '200px 0',
    marginTop: 300,
  },
  //layout
  layoutRoot: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backdropFilter: 'blur(6px)',
    borderRadius: '50%',
  },
  appBar: {
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  layoutBackground: {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: ' no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: '1800px 1100px',
  },
  button: {
    background: theme.palette.primary.main,
    textTransform: 'none',
    width: 300,
    marginRight: '25vw',
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      marginRight: '19vw',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 43,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  mainContainer: {
    minHeight: '50vh',
  },
  //experience
  experienceRoot: {
    transform: 'skew(0deg,-10deg)',
    width: '90vw',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  experienceBackground: {
    background: theme.palette.terciary.main,
    width: '100%',
    minHeight: '60vh',
    transform: 'skew(0deg,10deg) translateY(120px)',
    padding: '200px 0',
    marginTop: 230,
    marginBottom: 180,
  },
}))

export default useStyles
