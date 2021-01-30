import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'

import ContactTab from 'components/ContactTab'
import Footer from 'components/Footer'
const bgImg = 'javascript-code.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backdropFilter: 'blur(6px)',
    borderRadius:'50%'
  },
  title:{
    textAlign:'center'
  },
  appBar:{
    boxShadow:'none',
    backdropFilter: 'blur(6px)',
    display:'flex',
    alignItems:'flex-end',
    [theme.breakpoints.down('xs')]: {
      alignItems:'center'
    }
  },
  background:{
    backgroundImage:`url(${bgImg})`,
    backgroundRepeat:' no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: '1800px 1100px'
  },
  button:{
    background:theme.palette.primary.main,
    textTransform:'none',
    width:300,
    marginRight:'25vw',
    flexGrow:1,
    [theme.breakpoints.down('md')]:{
      marginRight:'19vw'
    },
    [theme.breakpoints.down('sm')]:{
      marginRight:43
    },
    [theme.breakpoints.down('xs')]:{
      marginRight:0
    },
    '&:hover': {
      backgroundColor:theme.palette.secondary.main
    }
  },
  mainContainer:{
    minHeight:'50vh'
  }
}))

function ScrollTop(props:any) {
  const { children, window } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event:any) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

export default function Layout(props:JSX.ElementChildrenAttribute) {
  const classes = useStyles()
  return (
    <div 
      className={classes.background}
    >
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Button
            className={classes.button}
            variant="contained"
          >
            <Typography
              className={classes.title} 
              variant="h3"
            >
              Leonardo Sciretta
            </Typography>
          </Button>
          <Hidden xsDown>
            <ContactTab size={'small'}/>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Grid 
        container
        justify="center"
        className={classes.mainContainer}
      >
        {props.children}
      </Grid>
      <Footer/>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}