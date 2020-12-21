import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ContactTab from './ContactTab'

const useStyles = makeStyles((theme) => ({
  root:{
    height:'40vh',
    minHeight:300,
    background:theme.palette.secondary.main,
    boxShadow:'none',
    backdropFilter: 'blur(6px)'
  }
}))

export default function Footer(props) {
  const classes = useStyles()
  return (
    <Grid 
      container
      className={classes.root}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid 
        item
      >
        <ContactTab size={"large"}/>
      </Grid>
      <Grid item>
        <Typography
          variant="h4"
        >
          Leonardo ©
        </Typography>
      </Grid>
    </Grid>
  )
}