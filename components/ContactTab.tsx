import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { SizeType } from 'types'
import useStyles from 'styles/ComponentsStyles'

const github = 'githubicon.svg'
const instagram = 'instagram.svg'
const likedin = 'linkedin.svg'

export default function ContactTab({ size }: { size: SizeType }): JSX.Element {
  const classes = useStyles()
  const sizeValue = `${size === 'small' ? 30 : 50}`
  return (
    <>
      <IconButton
        aria-label="github"
        className={classes.icon}
        target="_blank"
        href={'https://github.com/sciretta'}
      >
        <img height={sizeValue} width={sizeValue} src={github} />
      </IconButton>
      <IconButton
        aria-label="instagram"
        className={classes.icon}
        target="_blank"
        href={'https://www.instagram.com/sciretta28'}
      >
        <img height={sizeValue} width={sizeValue} src={instagram} />
      </IconButton>
      <IconButton
        aria-label="likedin"
        className={classes.icon}
        target="_blank"
        href={'https://www.linkedin.com/in/leonardo-sciretta-a43939201'}
      >
        <img height={sizeValue} width={sizeValue} src={likedin} />
      </IconButton>
    </>
  )
}
