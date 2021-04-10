import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import WorkIcon from '@material-ui/icons/Work'
import InstagramIcon from '@material-ui/icons/Instagram'
import IconButton from '@material-ui/core/IconButton'
import { SizeType } from 'types'
import useStyles from 'styles/ComponentsStyles'

export default function ContactTab({ size }: { size: SizeType }): JSX.Element {
  const classes = useStyles()
  return (
    <>
      <IconButton
        aria-label="github"
        className={classes.icon}
        target="_blank"
        href={'https://github.com/sciretta'}
      >
        <GitHubIcon fontSize={size} />
      </IconButton>
      <IconButton
        aria-label="instagram"
        className={classes.icon}
        target="_blank"
        href={'https://www.instagram.com/sciretta28'}
      >
        <InstagramIcon fontSize={size} />
      </IconButton>
      <IconButton
        aria-label="likedin"
        className={classes.icon}
        target="_blank"
        href={'https://www.linkedin.com/in/leonardo-sciretta-a43939201'}
      >
        <WorkIcon fontSize={size} />
      </IconButton>
    </>
  )
}
