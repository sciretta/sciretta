import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
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
import useStyles from 'styles/ViewsStyles'

function ScrollTop(props: any) {
  const { children, window } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: any): React.FC => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.layoutRoot}
      >
        {children}
      </div>
    </Zoom>
  )
}

export default function Layout(props: JSX.ElementChildrenAttribute) {
  const classes = useStyles()
  return (
    <div className={classes.layoutBackground}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Button className={classes.button} variant="contained">
            <Typography className={classes.text} variant="h3">
              Leonardo Sciretta
            </Typography>
          </Button>
          <Hidden xsDown>
            <ContactTab size={'small'} />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Grid container justify="center" className={classes.mainContainer}>
        {props.children}
      </Grid>
      <Footer />
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}
