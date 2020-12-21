import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import MailIcon from '@material-ui/icons/Mail'
import InstagramIcon from '@material-ui/icons/Instagram'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  icon:{
    color:theme.palette.text.main,
    margin:5
  }
}))

export default function ContactButtons({size}){
  const classes = useStyles()
  return (
    <>
      <IconButton 
        aria-label="facebook"
        className={classes.icon}
        target="_blank"
        href={'https://www.facebook.com/lsciretta'}
      >
        <FacebookIcon fontSize={size}/>
      </IconButton>
      <IconButton 
        aria-label="github"
        className={classes.icon}
        target="_blank"
        href={'https://github.com/sciretta'}
      >
        <GitHubIcon fontSize={size}/>
      </IconButton>
      <IconButton 
        aria-label="instagram"
        className={classes.icon}
        target="_blank"
        href={'https://www.instagram.com/sciretta28/'}
      >
        <InstagramIcon fontSize={size}/>
      </IconButton>
    </>
  )
}
