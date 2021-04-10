import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ContactTab from './ContactTab'
import useStyles from 'styles/ComponentsStyles'

export default function Footer() {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <ContactTab size={'large'} />
      </Grid>
      <Grid item>
        <Typography variant="h4">Leonardo ©</Typography>
      </Grid>
    </Grid>
  )
}
